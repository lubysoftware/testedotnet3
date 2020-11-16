import { Injectable } from "@angular/core";
import { EMPTY, Observable } from 'rxjs';
import { ShowMessageService } from '../services/show-message.service';

@Injectable()
export abstract class ServiceCompartilhado {
  constructor(protected readonly showMessageService: ShowMessageService) { }
  protected errorHandler(error: any): Observable<any> {
    this.showMessageService.showMessage('Ops!!! aconteceu alguma coisa errada', true);
    return EMPTY;
  }
}