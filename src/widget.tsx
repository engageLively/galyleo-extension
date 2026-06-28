import { DocumentModel } from '@jupyterlab/docregistry';
import { IFrame } from '@jupyterlab/apputils';
import { Signal } from '@lumino/signaling';
import { DocumentRegistry } from '@jupyterlab/docregistry';
import { ServiceManager } from '@jupyterlab/services';
import { galyleoURLFactory } from './index';

export class GalyleoPanel extends IFrame {
  private _iframe: HTMLIFrameElement;
  private _model: DocumentModel;
  private _context: DocumentRegistry.IContext<DocumentModel>;
  private _serviceManager: ServiceManager.IManager;
  private _instanceId: string;
  private _messageListener: (event: MessageEvent) => void;
  private _isReady: boolean = false;

  constructor(context: DocumentRegistry.IContext<DocumentModel>, serviceManager: ServiceManager.IManager) {
    super({
      sandbox: [
        'allow-scripts',
        'allow-same-origin',
        'allow-popups',
        'allow-forms',
        'allow-downloads',
        'allow-modals'
      ],
      referrerPolicy: 'no-referrer'
    });

    // Also set directly on the inner iframe element to be sure
    const iframeEl = this.node.querySelector('iframe');
    if (iframeEl) {
      iframeEl.setAttribute(
        'sandbox',
        'allow-scripts allow-same-origin allow-popups allow-forms allow-downloads allow-modals'
      );
    }
    this._iframe = (iframeEl ?? this.node) as HTMLIFrameElement;

    this._instanceId = window.crypto.randomUUID();
    this._model = context.model;
    this._context = context;
    this._serviceManager = serviceManager;

    this._messageListener = this._createMessageListener();
    window.addEventListener('message', this._messageListener);

    context.ready.then(() => {
      this._isReady = true;
      this._model.contentChanged.connect(this._onContentChanged);
    });

    // Defer src until the microtask queue drains so settingRegistry.load()
    // has time to populate galyleoURLFactory before we read it.
    Promise.resolve().then(() => {
      const studioURL = galyleoURLFactory.resolvedStudioURL;
      const params = new URLSearchParams();
      params.set('instanceId', this._instanceId);
      params.set('mode', 'edit');
      if (galyleoURLFactory.publishServer) {
        params.set('galyleo_server', galyleoURLFactory.publishServer);
      }
      for (const ts of galyleoURLFactory.resolvedTableServers) {
        params.append('table_server', ts);
      }
      this._iframe.src = `${studioURL}?${params.toString()}`;
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
    window.removeEventListener('message', this._messageListener);
    Signal.clearData(this);
    super.dispose();
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
        this._model.sharedModel.setSource(
          JSON.stringify(payload.content, null, 2)
        );
        await this._context.save();
        this._postMessage('galyleo:saveSuccess');
      },

      'galyleo:requestSave': async () => {
        await this._context.save();
        this._postMessage('galyleo:saveSuccess');
      },

      'galyleo:openFile': async (evt: MessageEvent) => {
        const { payload } = evt.data;
        if (!payload?.path) return;
        try {
          const file = await this._serviceManager.contents.get(payload.path, { content: true });
          const dashboardObject = file.content ? JSON.parse(file.content as string) : {};
          this._postMessage('galyleo:loadContent', { content: dashboardObject });
        } catch (err) {
          console.error('galyleo:openFile failed:', err);
        }
      },

      'galyleo:listDashboards': async () => {
        try {
          const listing = await this._serviceManager.contents.get('', { content: true });
          const dashboards = (listing.content as any[])
            .filter((f: any) => f.type === 'file' && f.name.endsWith('.gd.json'))
            .map((f: any) => ({ name: f.name, path: f.path }));
          this._postMessage('galyleo:dashboardList', { dashboards });
        } catch {
          this._postMessage('galyleo:dashboardList', { dashboards: [] });
        }
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
