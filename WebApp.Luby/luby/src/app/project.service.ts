import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Project} from './project';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  baseUrl = 'http://dot-core.test/api/project';

  constructor(private httpClient: HttpClient) { }

  // getAll(): Observable<any> {
  //   return this.httpClient.get(this.baseUrl);
  // }

  getAll(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.baseUrl);
  }

  get(id): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  create(data): Observable<any> {
    return this.httpClient.post(this.baseUrl, data);
  }

  update(id, data): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.httpClient.delete(this.baseUrl);
  }

  findByTitle(title): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}?name=${title}`);
  }
}
