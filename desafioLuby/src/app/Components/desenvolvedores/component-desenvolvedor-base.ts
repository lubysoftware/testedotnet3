import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { TecnologiaModel } from 'src/app/models/tecnologia';

export abstract class ComponentDesenvolvedorBase {
  public visible = true;
  public selectable = true;
  public removable = true;
  public addOnBlur = true;
  public readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  public tecnologias: Array<TecnologiaModel>;

  constructor() {
    this.tecnologias = new Array<TecnologiaModel>();
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.tecnologias.push({ nome: value.trim() });
    }

    if (input) {
      input.value = '';
    }
  }

  remove(tecnologia: TecnologiaModel): void {
    const index = this.tecnologias.indexOf(tecnologia);

    if (index >= 0) {
      this.tecnologias.splice(index, 1);
    }
  }
}