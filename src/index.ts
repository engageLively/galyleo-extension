import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { ABCWidgetFactory } from '@jupyterlab/docregistry';
import { IMainMenu } from '@jupyterlab/mainmenu';
import { ICommandPalette, MainAreaWidget } from '@jupyterlab/apputils';
import { ILauncher } from '@jupyterlab/launcher';
import {
  DocumentModel,
  DocumentRegistry,
  DocumentWidget
} from '@jupyterlab/docregistry';
import { GalyleoPanel } from './widget';
// import type { IFileType } from '@jupyterlab/rendermime-interaces';
import { LabIcon, IFrame } from '@jupyterlab/ui-components';
import { PageConfig } from '@jupyterlab/coreutils';
import { Menu } from '@lumino/widgets';
import { ITranslator } from '@jupyterlab/translation';
import { IFileBrowserFactory } from '@jupyterlab/filebrowser';

export const mainAreaIframe = (url: string, label: string, id: string) => {
  const iframe: IFrame = new IFrame({
    sandbox: [
      'allow-downloads',
      'allow-forms',
      'allow-modals',
      'allow-popups',
      'allow-presentation',
      'allow-scripts',
      'allow-storage-access-by-user-activation',
      'allow-top-navigation',
      'allow-same-origin'
    ]
  });
  iframe.url = url;
  const widget: MainAreaWidget = new MainAreaWidget({ content: iframe });
  widget.id = id;
  widget.title.label = label;
  widget.title.closable = true;
  return widget;
};

// In production, galyleoServiceURL will ALWAYS end in /services/galyleo

export class GalyleoURLFactory {
  private _translator: ITranslator;
  private _serviceURL: string;
  constructor(_translator: ITranslator) {
    this._translator = _translator;
    this._serviceURL = 'http://localhost:9999/services/galyleo';
  }
  get studioURL(): string {
    const studio: string =
      this._translator.languageCode === 'ja_JP' ? 'studio-jp' : 'studio-en';
    return PageConfig.getBaseUrl() + studio + '/index.html';
  }
  get galyleoServiceURL(): string {
    return this._serviceURL;
  }
  set galyleoServiceURL(serviceURL: string) {
    this._serviceURL = serviceURL;
  }
}

export let galyleoURLFactory: GalyleoURLFactory;

// The icon for the desktop
export const galyleoIcon = new LabIcon({
  name: 'Galyleopkg:galyleo',
  svgstr:
    '<?xml version="1.0" encoding="UTF-8"?><svg width="90px" height="90px" viewBox="0 0 90 90" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>engageLively</title><desc>https://engagelively.com/</desc><defs></defs><g id="star" transform="translate(1.000000, 3.000000)" fill-rule="nonzero" fill="#F57C00"><path d="M81.9,57.7 C81.9,57.6 81.8,57.6 81.8,57.5 C81.8,57.4 81.7,57.4 81.7,57.4 L81.7,57.4 C81.1,56.2 80.9,55 80.1,54 C79.5,53.3 78.9,52.6 78.2,52 C78.1,51.9 78.1,51.9 78,51.9 L72.2,47.8 C71.8,47.5 71.5,47.3 71.1,47 C69.7,45.7 68.7,44 68.5,42.3 C68.6,40.6 69.6,38.8 71.1,37.6 C71.5,37.3 71.8,37.1 72.2,36.8 L78,32.7 C78.1,32.6 78.1,32.6 78.2,32.6 C79,32 79.5,31.3 80.1,30.6 C80.9,29.6 81.1,28.4 81.7,27.2 L81.7,27.2 C81.7,26 82.1,24.9 82.1,23.7 C81.9,21.5 81.2,19.3 79.9,17.4 C79.3,16.6 78.7,15.7 77.9,15 C77.9,15 77.9,15 77.8,14.9 C77.2,14.3 76.5,13.7 75.9,13.3 C75.9,13.3 75.8,13.3 75.8,13.2 C73.5,11.5 70.4,11 67.6,11.6 L67.5,11.6 L67.4,11.6 C66.2,11.9 65,12.4 63.9,13.1 L57.6,17.8 C57.3,17.9 57.2,18.1 57,18.2 C55.3,19.2 53,19.8 51.1,18.8 C49.7,18 48.5,16.6 48,15.1 C47.1,12.5 46.3,9.8 45.5,7.2 C45.2,6.4 44.9,5.6 44.3,5 C44,4.6 43.7,4.1 43.4,3.7 C42.7,2.9 41.9,2.1 40.8,1.5 C39.8,1 38.8,0.5 37.8,0.3 C37.2,0.2 36.5,0.2 35.9,0.2 C35.3,0.2 34.6,0.3 34,0.3 C33,0.4 32,0.6 30.9,0.9 C30.8,0.9 30.8,1 30.7,1 L30.6,1 C29.1,1.5 27.5,2.3 26.3,3.3 C26.3,3.3 26.2,3.3 26.2,3.4 C23.7,5.4 22.1,8.3 22.2,11.6 C22.1,12.6 22.3,13.7 22.6,14.7 L25.1,22.1 C25.2,22.4 25.3,22.7 25.4,23 C25.7,24.7 25.5,26.5 24.8,27.8 C23.8,29.7 21.2,30.4 19.2,30.4 L11.4,30.3 C10.1,30.3 8.8,30.6 7.6,31.1 C4.5,32.4 2,35.1 1,38.3 C0.6,39.6 0.3,41 0.3,42.3 L0.3,42.3 C0.3,43.6 0.7,45 1,46.3 C2,49.5 4.1,52.2 7.4,53.5 C8.6,54 9.9,54.3 11.2,54.3 L19.1,54.2 C21.2,54.2 23.5,55 24.8,56.8 C25.6,58.1 25.8,59.9 25.4,61.6 C25.3,61.9 25.2,62.2 25.1,62.5 L22.6,69.9 C22.3,70.9 22.2,72 22.2,73 C22.1,76.3 23.8,79.1 26.2,81.2 C26.2,81.2 26.3,81.2 26.3,81.3 C26.7,81.6 27.1,81.8 27.5,82.1 C29.4,83.4 31.8,84.1 34,84.3 C35.2,84.4 36.7,84.6 37.8,84.3 C38.8,84 39.9,83.6 40.8,83.1 C41.8,82.5 42.7,81.8 43.4,80.9 C43.7,80.5 44,80.1 44.3,79.6 C44.7,78.9 45.1,78.2 45.5,77.4 C45.5,77.4 47.9,70 47.9,69.9 C48.4,68.2 49.6,66.6 51.2,65.7 C51.2,65.7 51.3,65.7 51.3,65.6 C53.1,64.6 55.6,65 57.2,66.2 C57.4,66.3 57.6,66.5 57.8,66.6 L64.1,71.3 C65.2,72.1 66.5,72.4 67.8,72.7 C68.4,72.8 69,72.8 69.5,72.8 L69.6,72.8 C71.7,73.4 74.2,72.4 75.9,71.1 L76,71.2 C76.4,70.9 77,70.6 77.4,70.1 C78,69.5 78.7,68.9 79.2,68.2 C79.3,68.1 79.3,68.1 79.3,68 C80.3,66.7 81.2,65.3 81.5,63.7 C81.6,63.6 81.6,63.4 81.6,63.2 C81.9,62.4 82,61.7 82,60.8 C82.2,59.9 82.2,58.8 81.9,57.7 Z" id="Star"></path></g></svg>'
});

export const galyleoFileType: DocumentRegistry.IFileType = {
  name: 'galyleo',
  displayName: 'Galyleo Document',
  extensions: ['.gd.json', '.gd.json'],
  mimeTypes: ['application/json'],
  fileFormat: 'text',
  contentType: 'file',
  icon: <any>galyleoIcon
};

export class GalyleoPanelFactory extends ABCWidgetFactory<
  DocumentWidget<GalyleoPanel>,
  DocumentModel
> {
  protected createNewWidget(
    context: DocumentRegistry.Context
  ): DocumentWidget<GalyleoPanel> {
    const modelContext = context as DocumentRegistry.IContext<DocumentModel>;
    const content = new GalyleoPanel(modelContext);
    const widget = new DocumentWidget({ content, context });
    return widget;
  }
}

// Example: fetch environment variables from <foo>/env
async function fetchEnvVars(): Promise<Record<string, string>> {
  const baseUrl = PageConfig.getBaseUrl(); // e.g., "https://myserver.org/jupyter/"
  const response = await fetch(`${baseUrl}env`, {
    method: 'GET',
    credentials: 'same-origin'
  });

  if (!response.ok) {
    console.error('Failed to load environment variables');
    return {};
  }

  return await response.json();
}

/**
 * Initialization data for the galyleo_extension extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'galyleo_extension:plugin',
  description: 'A fast test of reading a file and displaying it',
  autoStart: true,
  requires: [
    ICommandPalette,
    IMainMenu,
    ILauncher,
    ITranslator,
    IFileBrowserFactory
  ],
  activate: (
    app: JupyterFrontEnd,
    palette: ICommandPalette,
    mainMenu: IMainMenu,
    launcher: ILauncher,
    translator: ITranslator,
    browserFactory: IFileBrowserFactory
  ) => {
    galyleoURLFactory = new GalyleoURLFactory(translator);
    console.log('JupyterLab extension galyleo_extension is activated!');
    // Get the query string from the current URL
    // const urlParams = new URLSearchParams(window.location.search);

    // Retrieve the value of the 'galyleoServer' parameter
    // const galyleoServer = urlParams.get('galyleoServer');
    // if (galyleoServer) {
    //   galyleoURLFactory.rootURL = galyleoServer;
    // }
    // Log or use the value
    fetchEnvVars().then(envVars => {
      const galyleoServer: string = envVars['galyleoServer'];
      console.log(`Server is ${galyleoServer}`);
      if (galyleoServer) {
        galyleoURLFactory.galyleoServiceURL = galyleoServer;
      }
    });

    const { commands, serviceManager } = app;
    const fileBrowser = browserFactory.tracker.currentWidget;

    const galyleoType = galyleoFileType;

    // Register file type
    app.docRegistry.addFileType(galyleoType);

    // Register widget factory
    const galyleoPanelFactory = new GalyleoPanelFactory({
      name: 'Galyleo Editor',
      fileTypes: [galyleoType.name],
      defaultFor: [galyleoType.name]
    });
    app.docRegistry.addWidgetFactory(galyleoPanelFactory);

    // Command IDs
    const CREATE_NEW = 'galyleo:create-new';
    const OPEN_EXISTING = 'galyleo:open-existing';
    const SAVE_ACTIVE = 'galyleo:save-active';

    const fileTypeExtension = galyleoType.extensions[0];

    // Commands

    // 1. Create new Galyleo file
    commands.addCommand(CREATE_NEW, {
      label: 'New Galyleo Dashboard',
      caption: 'Create a new Galyleo dashboard',
      icon: galyleoIcon,
      execute: async () => {
        const fileOptions = {
          type: 'file',
          ext: fileTypeExtension,
          path: fileBrowser?.model.path
        };
        const model = await serviceManager.contents.newUntitled(fileOptions);
        await serviceManager.contents.save(model.path, {
          type: 'file',
          format: 'text',
          content: '{}'
        });

        await commands.execute('docmanager:open', {
          path: model.path,
          factory: 'Galyleo Editor'
        });
      }
    });

    // 2. Open existing Galyleo file
    commands.addCommand(OPEN_EXISTING, {
      label: 'Open Galyleo Document...',
      caption: 'Open an existing Galyleo document',
      icon: galyleoIcon,
      execute: async () => {
        await commands.execute('filebrowser:open-path', {});
      }
    });

    // 3. Save current Galyleo file
    commands.addCommand(SAVE_ACTIVE, {
      label: 'Save Galyleo Document',
      caption: 'Save the current Galyleo document',
      icon: galyleoIcon,
      execute: async () => {
        const widget = app.shell.currentWidget;
        if (widget && 'context' in widget) {
          const context = (widget as DocumentWidget).context;
          if (context.model && context.path.endsWith(fileTypeExtension)) {
            await context.save();
          }
        }
      }
    });

    const GALYLEO_SERVICE = 'galyleo:open-service';

    commands.addCommand(GALYLEO_SERVICE, {
      label: 'Galyleo Service',
      caption: 'Open the Galyleo Service',
      icon: galyleoIcon,
      execute: async () => {
        const helpWidget: MainAreaWidget = mainAreaIframe(
          `${galyleoURLFactory.galyleoServiceURL}/greeting`,
          'Galyleo Service',
          'widget:service'
        );
        app.shell.add(helpWidget);
      }
    });

    const OPEN_HELP = 'galyleo:open-help';

    commands.addCommand(OPEN_HELP, {
      label: 'Galyleo Help',
      caption: 'Open the Galyleo Help page',
      icon: galyleoIcon,
      execute: async () => {
        const helpWidget: MainAreaWidget = mainAreaIframe(
          'https://galyleo-user-docs.readthedocs.io/en/latest/index.html',
          'Galyleo Help',
          'widget:help'
        );
        app.shell.add(helpWidget);
      }
    });

    // Add to File menu
    mainMenu.fileMenu.newMenu.addGroup([{ command: CREATE_NEW }], 30);
    mainMenu.fileMenu.addGroup([{ command: CREATE_NEW }], 30);
    mainMenu.fileMenu.addGroup([{ command: OPEN_EXISTING }], 40);
    mainMenu.fileMenu.addGroup([{ command: SAVE_ACTIVE }], 50);
    mainMenu.helpMenu.addGroup([{ command: OPEN_HELP }], 50);

    const galyleoMenu: Menu = new Menu({ commands: app.commands });
    galyleoMenu.title.label = 'Galyleo';
    galyleoMenu.addItem({ command: CREATE_NEW });
    galyleoMenu.addItem({ command: OPEN_EXISTING });
    galyleoMenu.addItem({ command: SAVE_ACTIVE });
    galyleoMenu.addItem({ command: OPEN_HELP });
    galyleoMenu.addItem({ command: GALYLEO_SERVICE });

    mainMenu.addMenu(galyleoMenu);

    // Add to Command Palette
    palette.addItem({ command: CREATE_NEW, category: 'Galyleo' });
    palette.addItem({ command: OPEN_EXISTING, category: 'Galyleo' });
    palette.addItem({ command: SAVE_ACTIVE, category: 'Galyleo' });
    palette.addItem({ command: OPEN_HELP, category: 'Galyleo' });

    launcher.add({
      command: CREATE_NEW,
      category: 'Other',
      rank: 1
    });
  }
};

export default plugin;
