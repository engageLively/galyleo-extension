// Copyright 2023 Project Jupyter Contributors
//
// Original version has copyright 2018 Wolf Vollprecht and is licensed
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { DocumentRegistry, DocumentWidget } from '@jupyterlab/docregistry';

import { IFrame } from '@jupyterlab/apputils';

// import { SandboxExceptions } from '@jupyterlab/ui-components';

import { Message } from '@lumino/messaging';

import { Signal } from '@lumino/signaling';

import { GalyleoDocModel } from './model';

import { GALYLEO_URL } from './index';

declare type StudioHandler =
  | 'galyleo:writeFile'
  | 'galyleo:setDirty'
  | 'galyleo:ready'
  | 'galyleo:requestSave';

/**
 * Convert an object to JSON if required
 */
const _getJSONForm = (jsonFormOrObject: any): string => {
  if (typeof jsonFormOrObject === 'string') {
    return jsonFormOrObject;
  } else {
    return JSON.stringify(jsonFormOrObject);
  }
};
/**
 * DocumentWidget: widget that represents the view or editor for a file type.
 */
export class GalyleoDocWidget extends DocumentWidget<
  GalyleoPanel,
  GalyleoDocModel
> {
  constructor(options: DocumentWidget.IOptions<GalyleoPanel, GalyleoDocModel>) {
    super(options);
  }

  /**
   * Dispose of the resources held by the widget.
   */
  dispose(): void {
    this.content.dispose();
    super.dispose();
  }
}

/**
 * Widget that contains the main view of the DocumentWidget.
 */
export class GalyleoPanel extends IFrame {
  /**
   * Construct a `ExamplePanel`.
   *
   * @param context - The documents context.
   */

  constructor(context: DocumentRegistry.IContext<GalyleoDocModel>) {
    super({
      sandbox: [
        'allow-scripts',
        'allow-popups',
        'allow-modals',
        'allow-storage-access-by-user-activation'
      ]
    });
    this._initMessageListeners();
    this._iframe = this.node.querySelector('iframe')!;
    this._iframe.src = `${GALYLEO_URL}/studio-en/index.html?inJupyterLab=true`;
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
    /* this._cube.addEventListener('mousedown', this, true);
    this._cube.addEventListener('mouseup', this, true);
    this.node.addEventListener('mouseenter', this, true);
    this.node.addEventListener('mouseleave', this, true);
    this.node.addEventListener('mousemove', this, true); */
  }

  /**
   * Handle `before-detach` messages sent to the widget.
   *
   * @param msg Widget layout message
   */
  protected onBeforeDetach(msg: Message): void {
    /* this._cube.removeEventListener('mousedown', this, true);
    this._cube.removeEventListener('mouseup', this, true);
    this.node.removeEventListener('mouseenter', this, true);
    this.node.removeEventListener('mouseleave', this, true);
    this.node.removeEventListener('mousemove', this, true); */
    super.onBeforeDetach(msg);
  }

  _initMessageListeners(): void {
    // get a hold of the tracker and dispatch to the different widgets
    const handlers = {
      'galyleo:writeFile': (evt: MessageEvent) => {
        /* const doc: GalyleoDoc = this._getDocumentForFilePath(
          evt.data.dashboardFilePath
        ); */
        /* doc.context.model.value.text = evt.data.jsonString;
        doc.content.completeSave(); // signal that save can be finalized */
        // doc.content = evt.data.jsonString;
        this._model.content = _getJSONForm(evt.data.jsonString);
      },
      'galyleo:setDirty': (evt: MessageEvent) => {
        /* const doc: GalyleoDocument = this._getDocumentForFilePath(
          evt.data.dashboardFilePath
        ); */
        /* this is a HACK and needs to get changed.  Left in for compatibility
        with pre-4.0.  What should happen is that the dirty message should
        have the dashboard content in it.  I need to change studio for that,
        and will, but for now what we'll do is send another message back requesting
        the content.  and we'll get a writeFile message in return */
        this._iframe.contentWindow?.postMessage(
          { method: 'galyleo:save', path: 'foo' },
          '*'
        );
      },
      'galyleo:ready': (evt: MessageEvent) => {
        /* const doc: GalyleoDocument = this._getDocumentForFilePath(
          evt.data.dashboardFilePath
        );
        // doc.content.loadDashboard(doc.context.model.value.text); // load the dashboard
        const dashboardStruct: string =
          doc.content.model.sharedModel.getSource();
        doc.content.loadDashboard(dashboardStruct); */
        const jsonString = _getJSONForm(this._model.content);
        this._iframe.contentWindow?.postMessage(
          { method: 'galyleo:load', jsonString: jsonString },
          '*'
        );
      },
      'galyleo:requestSave': async (evt: MessageEvent) => {
        /* // the dashboard uses this to request a save
        const doc: GalyleoDocument = this._getDocumentForFilePath(
          evt.data.dashboardFilePath
        );
        // await doc.content.requestSave(evt.data.dashboardFilePath);
        await doc.context.save(); */
      }
    };
    window.addEventListener('message', evt => {
      if (evt.data.method in handlers) {
        handlers[evt.data.method as StudioHandler](evt);
      }
    });
  }

  /**
   * Instruct the editor to load a GalyleoTable.
   * @param table : the GalyleoTable to to load (JSON structure)
   */

  loadTable(table: any): void {
    // table is a dictionary, how do we say that?
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

    /* if (event.type) {
      switch (event.type) {
        case 'mousedown':
          if (event.button === 0) {
            this._isDown = true;
            this._offset = {
              x: this._model.position.x - event.clientX,
              y: this._model.position.y - event.clientY
            };
          }
          break;
        case 'mouseup':
          if (event.button === 0) {
            this._isDown = false;
          }
          break;
        case 'mouseenter':
          break;
        case 'mouseleave':
          // Wrapping the modifications to the shared model into a flag
          // to prevent apply changes triggered by the same client
          this._model.setCursor(null);
          break;
        case 'mousemove': {
          const bbox = this.node.getBoundingClientRect();
          // Wrapping the modifications to the shared model into a flag
          // to prevent apply changes triggered by the same client
          this._model.setCursor({
            x: event.x - bbox.left,
            y: event.y - bbox.top
          });

          if (this._isDown) {
            this._model.position = {
              x: event.clientX + this._offset.x,
              y: event.clientY + this._offset.y
            };
          }
          break;
        }
      }
    } */
  }

  /**
   * Callback to listen for changes on the model. This callback listens
   * to changes on shared model's content.
   */
  private _onContentChanged = (): void => {
    // const jsonString = _getJSONForm(this._model.content);
    // this._iframe.contentWindow?.postMessage(
    // { method: 'galyleo:load', jsonString: jsonString },
    //  '*'
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

  /* private _isDown: boolean;
  private _offset: Position;
  private _cube: HTMLElement; */
  private _iframe: HTMLIFrameElement;
  private _clients: Map<string, HTMLElement>;
  private _model: GalyleoDocModel;
}
