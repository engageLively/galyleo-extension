import { DocumentModel } from '@jupyterlab/docregistry';

// import { IContext } from '@jupyterlab/docregistry';

import { IFrame } from '@jupyterlab/apputils';
import { Signal } from '@lumino/signaling';
import { DocumentRegistry } from '@jupyterlab/docregistry';
import { galyleoURLFactory } from './index'; // Assuming the URL factory is in a separate file
import { Message } from '@lumino/messaging';

// In GalyleoPanel.ts
/* 
// Assuming _getJSONForm is just a utility to convert the model content to JSON string form.
function _getJSONForm(content: any): string {
  // Example transformation; adjust according to your model's structure.
  return JSON.stringify(content);
}
*/

export class GalyleoPanel extends IFrame {
  private _iframe: HTMLIFrameElement;
  private _model: DocumentModel;
  private _context: DocumentRegistry.IContext<DocumentModel>;
  private _instanceId: string;
  private _messageListener: (event: MessageEvent) => void;
  private _isReady: boolean = false;

  constructor(context: DocumentRegistry.IContext<DocumentModel>) {
    super({
      sandbox: [
        'allow-scripts',
        'allow-storage-access-by-user-activation',
        'allow-same-origin'
      ],
      referrerPolicy: 'no-referrer'
    });
    context.ready.then(_ => {
      this._isReady = true;
      this._model.contentChanged.connect(this._onContentChanged);
      this._onContentChanged();
      this.update(); // <- this is safe because Widget defines it
    });

    this._messageListener = this._createMessageListener();
    window.addEventListener('message', this._messageListener);
    // Access the iframe from the node after attach
    this._iframe = this.node.querySelector('iframe')! as HTMLIFrameElement;
    const studioURL: string = galyleoURLFactory.studioURL;
    this._instanceId = window.crypto.randomUUID();
    const publishString: string = `galyleo_server=${encodeURIComponent(
      galyleoURLFactory.galyleoServiceURL
    )}`;
    const paramString: string = `instanceId=${
      this._instanceId
    }&inJupyterLab=true&${publishString}&studioServer=${encodeURIComponent(
      studioURL
    )}`;
    const url = `${studioURL}?${paramString}`;
    this._iframe.src = url;
    this._model = context.model;
    this._context = context;
  }

  /**
   * Dispose of the resources held by the widget.
   */
  dispose(): void {
    if (this.isDisposed) {
      return;
    }
    this._model.contentChanged.disconnect(this._onContentChanged);
    window.removeEventListener('message', this._messageListener);
    Signal.clearData(this);
    super.dispose();
  }

  /**
   * Handle `after-attach` messages sent to the widget.
   *
   * @param msg Widget layout message
   */
  protected onAfterAttach(msg: Message): void {
    super.onAfterAttach(msg);
    // Now you can safely access `this.node`
    // Optionally log to ensure it's being accessed
    console.log(this.node); // Or you can access `this.node.querySelector('iframe')` here
  }

  /**
   * Initialize message listeners for events from the iframe.
   */
  private _createMessageListener(): (evt: MessageEvent) => void {
    const handlers: Record<string, (evt: MessageEvent) => void> = {
      'galyleo:ready': () => {
        if (this._isReady) {
          const raw = this._model.sharedModel.getSource();
          const dashboardObject = raw.trim() ? JSON.parse(raw) : {};
          const payload = { content: dashboardObject };
          this._postMessage('galyleo:loadContent', payload);
        } else {
          console.warn(
            'Received galyleo:ready before context.ready — deferring.'
          );
          this._context.ready.then(() => {
            const raw = this._model.sharedModel.getSource();
            const dashboardObject = raw.trim() ? JSON.parse(raw) : {};
            this._postMessage('galyleo:loadContent', {
              content: dashboardObject
            });
          });
        }
      },

      'galyleo:contentChanged': async (evt: MessageEvent) => {
        const { payload } = evt.data;
        this._model.fromJSON(payload.content);
        // We can delete this at a later time and require a separate save
        await this._context.save();
        this._postMessage('galyleo:saveSuccess');
      },

      'galyleo:requestSave': async () => {
        await this._context.save();
        this._postMessage('galyleo:saveSuccess');
      }
    };

    return (evt: MessageEvent) => {
      const { type, instanceId } = evt.data;
      if (this._instanceId === instanceId) {
        if (type in handlers) {
          handlers[type](evt);
        } else {
          console.warn(`Unknown message type received: ${type}`);
        }
      }
    };
  }

  private _postMessage(type: string, payload: any = {}): void {
    this._iframe.contentWindow?.postMessage(
      { type, payload, instanceId: this._instanceId },
      '*'
    );
  }

  /**
   * Handle event messages sent to the widget.
   *
   * @param event Event on the widget
   */
  handleEvent(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    // Custom logic for handling mouse events (if any)
  }

  /**
   * Callback to listen for changes on the model. This callback listens
   * to changes on shared model's content.
   */
  private _onContentChanged = (): void => {
    // Currently a no-op.  BUT this will be called when the content is changed
    // by the Galyleo editor, so take care to avoid message loops.
    // The only case where this would do anything is where a user is simultaneously
    // editing a dashboard in a text editor and in this editor, or has two
    // different editors open on the same file.
    // Not implemented because this is a rare case and avoiding message loops takes some care
  };
}
