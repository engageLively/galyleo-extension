import { IFrame } from '@jupyterlab/apputils';
import { Signal } from '@lumino/signaling';
import { DocumentRegistry } from '@jupyterlab/docregistry';
import { GalyleoDocModel } from './model';  // Assuming the model is in 'model.ts'
import { galyleoURLFactory } from './index';  // Assuming the URL factory is in a separate file

// In GalyleoPanel.ts

// Assuming _getJSONForm is just a utility to convert the model content to JSON string form.
function _getJSONForm(content: any): string {
  // Example transformation; adjust according to your model's structure.
  return JSON.stringify(content);
}

export class GalyleoPanel extends IFrame {
  private _iframe: HTMLIFrameElement;
  private _clients: Map<string, HTMLElement>;
  private _model: GalyleoDocModel;

  constructor(context: DocumentRegistry.IContext<GalyleoDocModel>) {
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
    const publishString: string = `galyleo_server=${galyleoURLFactory.rootURL}`;
    const paramString: string = `inJupyterLab=true&${publishString}&studioServer=${studioURL}`;
    const url = `${studioURL}?${paramString}`;
    this._iframe.src = url;
    this._model = context.model;
    this._clients = new Map<string, HTMLElement>();

    context.ready.then(value => {
      this._model.contentChanged.connect(this._onContentChanged);
      this._model.clientChanged.connect(this._onClientChanged);

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
        this._model.content = _getJSONForm(evt.data.jsonString);
      },
      'galyleo:setDirty': (evt: MessageEvent) => {
        this._iframe.contentWindow?.postMessage(
          { method: 'galyleo:save', path: 'foo' },
          '*'
        );
      },
      'galyleo:ready': (evt: MessageEvent) => {
        const jsonString = _getJSONForm(this._model.content);
        this._iframe.contentWindow?.postMessage(
          { method: 'galyleo:load', jsonString: jsonString },
          '*'
        );
      },
      'galyleo:requestSave': async (evt: MessageEvent) => {
        await this._model.context.save();
      }
    };

    window.addEventListener('message', evt => {
      if (evt.data.method in handlers) {
        handlers[evt.data.method](evt);
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

  /**
   * Callback to listen for changes on the model. This callback listens
   * to changes on the different clients sharing the document.
   *
   * @param sender The DocumentModel that triggers the changes.
   * @param clients The list of client's states.
   */
  private _onClientChanged = (
    sender: GalyleoDocModel,
    clients: Map<number, any>
  ): void => {
    clients.forEach((client, key) => {
      if (this._model.clientId !== key) {
        const id = key.toString();

        if (client.mouse) {
          if (this._clients.has(id)) {
            const elt = this._clients.get(id)!;
            elt.style.left = client.mouse.x + 'px';
            elt.style.top = client.mouse.y + 'px';
          } else {
            const el = document.createElement('div');
            el.className = 'jp-example-client';
            el.style.left = client.mouse.x + 'px';
            el.style.top = client.mouse.y + 'px';
            el.style.backgroundColor = client.user.color;
            el.innerText = client.user.name;
            this._clients.set(id, el);
            this.node.appendChild(el);
          }
        } else if (this._clients.has(id)) {
          this.node.removeChild(this._clients.get(id)!);
          this._clients.delete(id);
        }
      }
    });
  };

  // Other methods and properties...

  private _iframe: HTMLIFrameElement;
  private _clients: Map<string, HTMLElement>;
  private _model: GalyleoDocModel;
}
