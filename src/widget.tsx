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

  constructor(context: DocumentRegistry.IContext<DocumentModel>) {
    super({
      sandbox: [
        'allow-scripts',
        'allow-popups',
        'allow-modals',
        'allow-storage-access-by-user-activation',
        'allow-same-origin'
      ],
      referrerPolicy: 'no-referrer'
    });

    this._initMessageListeners();
    // Access the iframe from the node after attach
    this._iframe = this.node.querySelector('iframe')! as HTMLIFrameElement;
    const studioURL: string = galyleoURLFactory.studioURL;
    const publishString: string = `galyleo_server=${galyleoURLFactory.galyleoServiceURL}`;
    const paramString: string = `inJupyterLab=true&${publishString}&studioServer=${studioURL}`;
    const url = `${studioURL}?${paramString}`;
    this._iframe.src = url;
    this._model = context.model;

    context.ready.then(value => {
      this._model.contentChanged.connect(this._onContentChanged);
      this._onContentChanged();
      this.update();
    });
  }

  /**
   * Dispose of the resources held by the widget.
   */
  dispose(): void {
    if (this.isDisposed) {
      return;
    }
    this._model.contentChanged.disconnect(this._onContentChanged);
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
  private _initMessageListeners(): void {
    const handlers = {
      'galyleo:writeFile': (evt: MessageEvent) => {
        // this._model.fromString(_getJSONForm(evt.data.jsonString));
        this._model.fromJSON(evt.data.jsonForm);
      },
      'galyleo:setDirty': (evt: MessageEvent) => {
        this._iframe.contentWindow?.postMessage(
          { method: 'galyleo:save', path: 'foo' },
          '*'
        );
      },
      'galyleo:ready': (evt: MessageEvent) => {
        // const jsonString = _getJSONForm(this._model.toString());
        const savedForm = this._model.toJSON();
        this._iframe.contentWindow?.postMessage(
          { method: 'galyleo:load', savedForm: savedForm },
          '*'
        );
      },
      'galyleo:requestSave': async (evt: MessageEvent) => {
        // await this._model.context.save();
      }
    };

    window.addEventListener('message', evt => {
      const method = evt.data.method as keyof typeof handlers;
      if (method in handlers) {
        handlers[method](evt);
      }
    });
  }
  /**
   * Instruct the editor to load a GalyleoTable.
   * @param table : the GalyleoTable to load (JSON structure)
   */
  loadTable(table: any): void {
    // Send the table to the iframe using postMessage
    this._iframe.contentWindow?.postMessage(
      { method: 'galyleo:loadTable', table },
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
    // You can use _getJSONForm(this._model.content) to transform the model content
    // const jsonString = _getJSONForm(this._model.content);
    // This would normally send the content to the iframe:
    // this._iframe.contentWindow?.postMessage(
    //   { method: 'galyleo:load', jsonString: jsonString },
    //   '*'
    // );
  };
}
