import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Api } from '../api/api';
import { ServiceCompartilhado } from '../shared/service-compartilhado';
import { ShowMessageService } from './show-message.service';
import { DesenvolvedorModel } from '../models/desenvolvedor';
import { RankingModel } from '../models/ranking';

@Injectable({
  providedIn: 'root'
})
export class RankingService extends ServiceCompartilhado {
  private resourceUrl: string = `${Api.API_URL}rankings`;

  constructor(
    private http: HttpClient,
    protected readonly showMessageService: ShowMessageService
  ) {
    super(showMessageService);
  }

  public getAll(): Observable<Array<RankingModel>> {
    return this.http.get<Array<RankingModel>>(this.resourceUrl).pipe(
      map((obj) => obj),
      catchError(error => this.errorHandler(error))
    );
  }
}