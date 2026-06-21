import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Api } from '../api/api';
import { ServiceCompartilhado } from '../shared/service-compartilhado';
import { ShowMessageService } from './show-message.service';
import { ProjetoModel } from '../models/projeto';

@Injectable({
  providedIn: 'root'
})
export class ProjetosService extends ServiceCompartilhado {
  private resourceUrl: string = `${Api.API_URL}projetos`;

  constructor(
    private http: HttpClient,
    protected readonly showMessageService: ShowMessageService
  ) {
    super(showMessageService);
  }

  public getAll(): Observable<Array<ProjetoModel>> {
    return this.http.get<Array<ProjetoModel>>(this.resourceUrl).pipe(
      map((obj) => obj),
      catchError(error => this.errorHandler(error))
    );
  }

  public create(projeto: ProjetoModel): Observable<ProjetoModel> {
    return this.http.post<ProjetoModel>(this.resourceUrl, projeto)
      .pipe(map((obj) => obj),
        catchError(error => this.errorHandler(error)));
  }

  public update(projeto: ProjetoModel): Observable<ProjetoModel> {
    return this.http.put<ProjetoModel>(`${this.resourceUrl}/${projeto.id}`, projeto).pipe(
      map((obj) => obj),
      catchError(error => this.errorHandler(error))
    );
  }

  public delete(id: string): Observable<ProjetoModel> {
    return this.http.delete<ProjetoModel>(`${this.resourceUrl}/${id}`).pipe(
      map((obj) => obj),
      catchError(error => this.errorHandler(error))
    );
  }
}