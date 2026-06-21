import { TecnologiaModel } from './tecnologia';

export class DesenvolvedorModel {
  constructor(
    public id?: any,
    public nome?: string,
    public idade?: number,
    public github?: string,
    public tecnologias?: Array<TecnologiaModel>
  ) { }
}