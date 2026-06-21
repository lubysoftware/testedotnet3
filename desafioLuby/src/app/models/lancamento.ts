import { Time } from '@angular/common';

export class LancamentoModel {
  constructor(
    public id?: string,
    public projeto?: string,
    public desenvolvedor?: string,
    public dataInicio?: Date,
    public dataFim?: Date,
    public horaInicio?: Time,
    public horaFim?: Time,
  ) { }
}