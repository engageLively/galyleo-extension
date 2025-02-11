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
import { ISettingRegistry } from '@jupyterlab/settingregistry';
import { LabIcon } from '@jupyterlab/ui-components';
// import galyleoSvgstr from '../style/engageLively.svg';
import {
  // nullTranslator,
  ITranslator,
  TranslationBundle
} from '@jupyterlab/translation';
import { ILauncher } from '@jupyterlab/launcher';
import { IDefaultFileBrowser } from '@jupyterlab/filebrowser';
import { IMainMenu } from '@jupyterlab/mainmenu';

/**
 * The name of the factory that creates editor widgets.
 */
const FACTORY = 'Galyleo editor';

// Export a token so other extensions can require it
export const IGalyleoDocTracker = new Token<IWidgetTracker<GalyleoDocWidget>>(
  'galyleoDocTracker'
);

class GalyleoURLFactory {
  private _rootURL: string;
  private _language: string;
  private _storeServerURL: string;
  constructor() {
    this._rootURL = 'https://galyleo.app';
    this._language = 'en';
    this._storeServerURL = 'https://galyleo.app/publication/index.html';
  }
  get studioURL() {
    const studio = this._language === 'ja_JP' ? 'studio-jp' : 'studio-en';
    return `${this._rootURL}/${studio}/index.html`;
  }
  set rootURL(url: string) {
    this._rootURL = url;
  }
  set language(language: string) {
    this._language = language;
  }
  set storeServerURL(url: string) {
    this._storeServerURL = url;
  }
  get storeServerURL(): string {
    return this._storeServerURL;
  }
}
export const galyleoURLFactory = new GalyleoURLFactory();

export const PLUGIN_ID = 'galyleo-extension:galyleo';

// The icon for the desktop
export const galyleoIcon = new LabIcon({
  name: 'Galyleopkg:galyleo',
  svgstr:
    '<?xml version="1.0" encoding="UTF-8"?><svg width="90px" height="90px" viewBox="0 0 90 90" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>engageLively</title><desc>https://engagelively.com/</desc><defs></defs><g id="star" transform="translate(1.000000, 3.000000)" fill-rule="nonzero" fill="#F57C00"><path d="M81.9,57.7 C81.9,57.6 81.8,57.6 81.8,57.5 C81.8,57.4 81.7,57.4 81.7,57.4 L81.7,57.4 C81.1,56.2 80.9,55 80.1,54 C79.5,53.3 78.9,52.6 78.2,52 C78.1,51.9 78.1,51.9 78,51.9 L72.2,47.8 C71.8,47.5 71.5,47.3 71.1,47 C69.7,45.7 68.7,44 68.5,42.3 C68.6,40.6 69.6,38.8 71.1,37.6 C71.5,37.3 71.8,37.1 72.2,36.8 L78,32.7 C78.1,32.6 78.1,32.6 78.2,32.6 C79,32 79.5,31.3 80.1,30.6 C80.9,29.6 81.1,28.4 81.7,27.2 L81.7,27.2 C81.7,26 82.1,24.9 82.1,23.7 C81.9,21.5 81.2,19.3 79.9,17.4 C79.3,16.6 78.7,15.7 77.9,15 C77.9,15 77.9,15 77.8,14.9 C77.2,14.3 76.5,13.7 75.9,13.3 C75.9,13.3 75.8,13.3 75.8,13.2 C73.5,11.5 70.4,11 67.6,11.6 L67.5,11.6 L67.4,11.6 C66.2,11.9 65,12.4 63.9,13.1 L57.6,17.8 C57.3,17.9 57.2,18.1 57,18.2 C55.3,19.2 53,19.8 51.1,18.8 C49.7,18 48.5,16.6 48,15.1 C47.1,12.5 46.3,9.8 45.5,7.2 C45.2,6.4 44.9,5.6 44.3,5 C44,4.6 43.7,4.1 43.4,3.7 C42.7,2.9 41.9,2.1 40.8,1.5 C39.8,1 38.8,0.5 37.8,0.3 C37.2,0.2 36.5,0.2 35.9,0.2 C35.3,0.2 34.6,0.3 34,0.3 C33,0.4 32,0.6 30.9,0.9 C30.8,0.9 30.8,1 30.7,1 L30.6,1 C29.1,1.5 27.5,2.3 26.3,3.3 C26.3,3.3 26.2,3.3 26.2,3.4 C23.7,5.4 22.1,8.3 22.2,11.6 C22.1,12.6 22.3,13.7 22.6,14.7 L25.1,22.1 C25.2,22.4 25.3,22.7 25.4,23 C25.7,24.7 25.5,26.5 24.8,27.8 C23.8,29.7 21.2,30.4 19.2,30.4 L11.4,30.3 C10.1,30.3 8.8,30.6 7.6,31.1 C4.5,32.4 2,35.1 1,38.3 C0.6,39.6 0.3,41 0.3,42.3 L0.3,42.3 C0.3,43.6 0.7,45 1,46.3 C2,49.5 4.1,52.2 7.4,53.5 C8.6,54 9.9,54.3 11.2,54.3 L19.1,54.2 C21.2,54.2 23.5,55 24.8,56.8 C25.6,58.1 25.8,59.9 25.4,61.6 C25.3,61.9 25.2,62.2 25.1,62.5 L22.6,69.9 C22.3,70.9 22.2,72 22.2,73 C22.1,76.3 23.8,79.1 26.2,81.2 C26.2,81.2 26.3,81.2 26.3,81.3 C26.7,81.6 27.1,81.8 27.5,82.1 C29.4,83.4 31.8,84.1 34,84.3 C35.2,84.4 36.7,84.6 37.8,84.3 C38.8,84 39.9,83.6 40.8,83.1 C41.8,82.5 42.7,81.8 43.4,80.9 C43.7,80.5 44,80.1 44.3,79.6 C44.7,78.9 45.1,78.2 45.5,77.4 C45.5,77.4 47.9,70 47.9,69.9 C48.4,68.2 49.6,66.6 51.2,65.7 C51.2,65.7 51.3,65.7 51.3,65.6 C53.1,64.6 55.6,65 57.2,66.2 C57.4,66.3 57.6,66.5 57.8,66.6 L64.1,71.3 C65.2,72.1 66.5,72.4 67.8,72.7 C68.4,72.8 69,72.8 69.5,72.8 L69.6,72.8 C71.7,73.4 74.2,72.4 75.9,71.1 L76,71.2 C76.4,70.9 77,70.6 77.4,70.1 C78,69.5 78.7,68.9 79.2,68.2 C79.3,68.1 79.3,68.1 79.3,68 C80.3,66.7 81.2,65.3 81.5,63.7 C81.6,63.6 81.6,63.4 81.6,63.2 C81.9,62.4 82,61.7 82,60.8 C82.2,59.9 82.2,58.8 81.9,57.7 Z" id="Star"></path></g></svg>'
});

/**
 * Initialization data for the documents extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: PLUGIN_ID,
  description: 'JupyterLab extension for a Galyleo dashboard widget.',
  autoStart: true,
  requires: [
    ILayoutRestorer,
    ISettingRegistry,
    ITranslator,
    IMainMenu,
    ILauncher,
    IDefaultFileBrowser
  ],
  optional: [ICollaborativeDrive],
  provides: IGalyleoDocTracker,
  activate: (
    app: JupyterFrontEnd,
    restorer: ILayoutRestorer,
    settings: ISettingRegistry,
    translator: ITranslator,
    mainMenu: IMainMenu,
    launcher: ILauncher,
    defaultBrowser: IDefaultFileBrowser,
    drive: ICollaborativeDrive | null
  ) => {
    // Namespace for the tracker
    const namespace = 'documents-galyleo';
    // Creating the tracker for the document
    const tracker = new WidgetTracker<GalyleoDocWidget>({ namespace });

    const queryString: string = window.location.search;
    const urlParams: URLSearchParams = new URLSearchParams(queryString);
    const parameters = ['galyleo_root_url', 'galyleo_storage_server'];
    parameters.forEach(parameter => {
      const value: string | null = urlParams.get(parameter);
      if (value) {
        settings.set(PLUGIN_ID, parameter, value);
      }
    });

    /**
     * Load the settings for the Galyleo Extension
     */

    function loadGalyleoSettings(setting: ISettingRegistry.ISettings) {
      galyleoURLFactory.rootURL = setting.get('galyleo_root_url')
        .composite as string;
      galyleoURLFactory.storeServerURL = setting.get('galyleo_storage_server')
        .composite as string;
    }

    Promise.all([app.restored, settings.load(PLUGIN_ID)]).then(
      ([, setting]) => {
        // read the Galyleo Settings from the command line
        loadGalyleoSettings(setting);
        setting.changed.connect(loadGalyleoSettings);
      }
    );

    function loadGalyleoLanguageSettings(setting: ISettingRegistry.ISettings) {
      galyleoURLFactory.language = setting.get('locale').composite as string;
    }

    Promise.all([
      app.restored,
      settings.load('@jupyterlab/translation-extension:plugin')
    ]).then(([, setting]) => {
      loadGalyleoLanguageSettings(setting);
      setting.changed.connect(loadGalyleoLanguageSettings);
    });

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
      icon: <any>galyleoIcon,
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
      if (drive.sharedModelFactory) {
        drive.sharedModelFactory.registerDocumentFactory(
          'galyleodoc',
          sharedGalyleoFactory
        );
      }
    }

    // Creating and registering the model factory for our custom DocumentModel
    const modelFactory = new GalyleoDocModelFactory();
    app.docRegistry.addModelFactory(modelFactory);

    // Creating the widget factory to register it so the document manager knows about
    // our new DocumentWidget
    const options = {
      name: FACTORY,
      modelName: 'galyleo-model',
      fileTypes: ['galyleo'],
      defaultFor: ['galyleo']
    };
    const widgetFactory = new GalyleoWidgetFactory(options);

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
    // make a label
    let trans: TranslationBundle;

    if (translator.load) {
      trans = translator.load('jupyterlab');
    }
    const makeLabel = (lab: any) => {
      return trans ? trans.__(lab) : lab;
    };
    // set up the main menu commands

    const newCommand = 'galyleo-editor:new-dashboard';
    // const renameCommand = 'galyleo-editor:renameDashboard'; // will add later

    // New dashboard command -- tell the docmanager to open up a
    // galyleo dashboard file, and then tell the editor to edit it,
    // sending the pathname to the editor

    app.commands.addCommand(newCommand, {
      label: makeLabel('Galyleo Dashboard'),
      caption: 'Open a new Galyleo Dashboard',
      icon: galyleoIcon,
      execute: async (args: any) => {
        // Create a new untitled dashboard file
        // const cwd = args['cwd'] || browserFactory.defaultBrowser.model.path;
        const cwd = args['cwd'] || defaultBrowser.model.path;
        const res = await app.commands.execute('docmanager:new-untitled', {
          path: cwd,
          contentType: 'file',
          ext: 'gd.json',
          fileFormat: 'json',
          type: 'file'
        });
        // open that dashboard
        app.commands.execute('docmanager:open', {
          path: res.path,
          factory: widgetFactory.name
        });
      }
    });

    const loadSampleCommand = 'galyeo-editor:sample-dashboard';

    // Sample dashboard command -- tell the docmanager to open up a
    // galyleo dashboard file,  then tell the editor to edit it,
    // sending the pathname to the editor, and then load the contents of
    // the file from the given url

    app.commands.addCommand(loadSampleCommand, {
      label: (args: any) => makeLabel(`Open Galyleo Sample ${args.text}`),
      caption: 'Open Galyleo Sample',
      icon: galyleoIcon,
      execute: async (args: any) => {
        // Create a new untitled dashboard file
        // const cwd = args['cwd'] || browserFactory.defaultBrowser.model.path;
        const cwd = args['cwd'] || defaultBrowser.model.path;
        const res = await app.commands.execute('docmanager:new-untitled', {
          path: cwd,
          contentType: 'file',
          ext: 'gd.json',
          fileFormat: 'json',
          type: 'file'
        });
        // open that dashboard
        const widget = await app.commands.execute('docmanager:open', {
          path: res.path,
          factory: widgetFactory.name
        });
        const response = await fetch(args.url);
        if (response.ok) {
          const result = await response.text();
          widget.context.model.value.text = result;
        }
      }
    });

    if (launcher) {
      launcher.add({
        command: newCommand
      });
    }

    const helpCommand = {
      command: 'help:open',
      args: {
        label: makeLabel('Galyleo Reference'),
        text: 'Galyleo Reference',
        url: 'https://galyleo-user-docs.readthedocs.io/'
      }
    };

    console.log('Adding menu commands');

    mainMenu.fileMenu.newMenu.addGroup([{ command: newCommand }], 30);
    mainMenu.helpMenu.addGroup([helpCommand]);
  }
};

export default extension;
