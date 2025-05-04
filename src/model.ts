import { ISignal, Signal } from '@lumino/signaling';
import { DocumentModel } from '@jupyterlab/docregistry';

export class GalyleoDocModel extends DocumentModel {
  private _dirty = false;
  private _contentChanged = new Signal<this, void>(this);
  private _stateChanged = new Signal<this, DocumentModel.IStateChangedArgs>(this);

  get contentChanged(): ISignal<this, void> {
    return this._contentChanged;
  }

  get stateChanged(): ISignal<this, DocumentModel.IStateChangedArgs> {
    return this._stateChanged;
  }

  get dirty(): boolean {
    return this._dirty;
  }

  set dirty(value: boolean) {
    if (value !== this._dirty) {
      const oldValue = this._dirty;
      this._dirty = value;
      this._stateChanged.emit({ name: 'dirty', oldValue, newValue: value });
    }
  }

  triggerChange(): void {
    this._contentChanged.emit(undefined);
    this.dirty = true;
  }

  toString(): string {
    return JSON.stringify(this.toJSON(), null, 2);
  }

  toJSON(): any {
    // Your real document data here
    return {};
  }

  fromJSON(data: any): void {
    // Load your real data here
    this.dirty = false;
    this._contentChanged.emit(undefined);
  }
}
