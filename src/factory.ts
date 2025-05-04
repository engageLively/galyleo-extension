import { GalyleoPanel } from './widget'; // GalyleoPanel from widget.tsx
import { GalyleoDocModel } from './model'; // GalyleoDocModel from model.ts
import { DocumentWidget } from '@jupyterlab/docregistry';

export class GalyleoWidgetFactory extends ABCWidgetFactory<
  DocumentWidget<GalyleoPanel, GalyleoDocModel>,
  GalyleoDocModel
> {
  constructor(options: DocumentRegistry.IWidgetFactoryOptions) {
    super(options);
  }

  protected createNewWidget(
    context: DocumentRegistry.IContext<GalyleoDocModel>
  ): DocumentWidget<GalyleoPanel, GalyleoDocModel> {
    return new DocumentWidget({
      context,
      content: new GalyleoPanel(context)
    });
  }
}
