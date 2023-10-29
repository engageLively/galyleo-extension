import { ICollaborativeDrive } from '@jupyter/docprovider';

import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin,
  ILayoutRestorer
} from '@jupyterlab/application';

import { WidgetTracker, IWidgetTracker } from '@jupyterlab/apputils';

import { Token } from '@lumino/coreutils';

import { GalyleoWidgetFactory, GalyleoDocModelFactory } from './factory';
import { GalyleoDoc } from './model';
import { GalyleoDocWidget } from './widget';

/**
 * The name of the factory that creates editor widgets.
 */
const FACTORY = 'Galyleo editor';

// Export a token so other extensions can require it
export const IGalyleoDocTracker = new Token<IWidgetTracker<GalyleoDocWidget>>(
  'galyleoDocTracker'
);

/**
 * Initialization data for the documents extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'documents',
  description: 'JupyterLab extension for a Galyleo dashboard widget.',
  autoStart: true,
  requires: [ILayoutRestorer],
  optional: [ICollaborativeDrive],
  provides: IGalyleoDocTracker,
  activate: (
    app: JupyterFrontEnd,
    restorer: ILayoutRestorer,
    drive: ICollaborativeDrive | null
  ) => {
    // Namespace for the tracker
    const namespace = 'documents-galyleo';
    // Creating the tracker for the document
    const tracker = new WidgetTracker<GalyleoDocWidget>({ namespace });

    // Handle state restoration.
    if (restorer) {
      // When restoring the app, if the document was open, reopen it
      restorer.restore(tracker, {
        command: 'docmanager:open',
        args: widget => ({ path: widget.context.path, factory: FACTORY }),
        name: widget => widget.context.path
      });
    }

    // register the filetype
    app.docRegistry.addFileType({
      name: 'galyleo',
      displayName: 'Galyleo',
      mimeTypes: ['text/json', 'application/json'],
      extensions: ['.gd.json', '.gd'],
      fileFormat: 'text',
      contentType: 'galyleodoc' as any
    });

    // Creating and registering the shared model factory
    // As the third-party jupyter-collaboration package is not part of JupyterLab core,
    // we should support collaboration feature absence.
    if (drive) {
      const sharedGalyleoFactory = () => {
        return GalyleoDoc.create();
      };
      drive.sharedModelFactory.registerDocumentFactory(
        'galyleodoc',
        sharedGalyleoFactory
      );
    }

    // Creating and registering the model factory for our custom DocumentModel
    const modelFactory = new GalyleoDocModelFactory();
    app.docRegistry.addModelFactory(modelFactory);

    // Creating the widget factory to register it so the document manager knows about
    // our new DocumentWidget
    const widgetFactory = new GalyleoWidgetFactory({
      name: FACTORY,
      modelName: 'galyleo-model',
      fileTypes: ['galyleo'],
      defaultFor: ['galyleo']
    });

    // Add the widget to the tracker when it's created
    widgetFactory.widgetCreated.connect((sender, widget) => {
      // Notify the instance tracker if restore data needs to update.
      widget.context.pathChanged.connect(() => {
        tracker.save(widget);
      });
      tracker.add(widget);
    });

    // Registering the widget factory
    app.docRegistry.addWidgetFactory(widgetFactory);
  }
};

export default extension;
