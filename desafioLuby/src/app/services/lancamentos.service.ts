import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Api } from '../api/api';
import { ServiceCompartilhado } from '../shared/service-compartilhado';
import { ShowMessageService } from './show-message.service';;
import { LancamentoModel } from '../models/lancamento';

@Injectable({
  providedIn: 'root'
})
export class LancamentosService extends ServiceCompartilhado {
  private resourceUrl: string = `${Api.API_URL}lancamentos`;

  constructor(
    private http: HttpClient,
    protected readonly showMessageService: ShowMessageService
  ) {
    super(showMessageService);
  }

  public getAll(): Observable<Array<LancamentoModel>> {
    return this.http.get<Array<LancamentoModel>>(this.resourceUrl).pipe(
      map((obj) => obj),
      catchError(error => this.errorHandler(error))
    );
  }

  public create(lancamento: LancamentoModel): Observable<LancamentoModel> {
    return this.http.post<LancamentoModel>(this.resourceUrl, lancamento)
      .pipe(map((obj) => obj),
        catchError(error => this.errorHandler(error)));
  }

  public delete(id: string): Observable<LancamentoModel> {
    return this.http.delete<LancamentoModel>(`${this.resourceUrl}/${id}`).pipe(
      map((obj) => obj),
      catchError(error => this.errorHandler(error))
    );
  }
}