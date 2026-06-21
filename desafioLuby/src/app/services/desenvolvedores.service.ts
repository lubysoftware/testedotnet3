import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Api } from '../api/api';
import { ServiceCompartilhado } from '../shared/service-compartilhado';
import { ShowMessageService } from './show-message.service';
import { DesenvolvedorModel } from '../models/desenvolvedor';

@Injectable({
  providedIn: 'root'
})
export class DesenvolvedoresService extends ServiceCompartilhado {
  private resourceUrl: string = `${Api.API_URL}desenvolvedores`;

  constructor(
    private http: HttpClient,
    protected readonly showMessageService: ShowMessageService
  ) {
    super(showMessageService);
  }

  public getAll(): Observable<Array<DesenvolvedorModel>> {
    return this.http.get<Array<DesenvolvedorModel>>(this.resourceUrl).pipe(
      map((obj) => obj),
      catchError(error => this.errorHandler(error))
    );
  }

  public create(desenvolvedor: DesenvolvedorModel): Observable<DesenvolvedorModel> {
    return this.http.post<DesenvolvedorModel>(this.resourceUrl, desenvolvedor)
      .pipe(map((obj) => obj),
        catchError(error => this.errorHandler(error)));
  }

  public update(desenvolvedor: DesenvolvedorModel): Observable<DesenvolvedorModel> {
    return this.http.put<DesenvolvedorModel>(`${this.resourceUrl}/${desenvolvedor.id}`, desenvolvedor).pipe(
      map((obj) => obj),
      catchError(error => this.errorHandler(error))
    );
  }

  public delete(id: string): Observable<DesenvolvedorModel> {
    return this.http.delete<DesenvolvedorModel>(`${this.resourceUrl}/${id}`).pipe(
      map((obj) => obj),
      catchError(error => this.errorHandler(error))
    );
  }
}