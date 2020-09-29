import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { Project } from './project.model'
import { catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {

    baseUrl = "/api/project"

    constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

    showMessage(msg: string, isError: boolean = false): void {
        this.snackBar.open(msg, 'x', {
          duration: 3000,
          horizontalPosition: "right",
          verticalPosition: "top",
          panelClass: isError ? ['msg-error'] : ['msg-success']
        });
      }

    create(Project: Project): Observable<Project> {
        const url = `${this.baseUrl}/insert`;
        return this.http.post<Project>(url, Project).pipe(
          map(obj => obj),
          catchError(e => this.errorHandler(e))
        );
      }
    
      
      read(): Observable<Project[]> {
        return this.http.get<Project[]>(this.baseUrl).pipe(
          map(obj => obj),
          catchError(e => this.errorHandler(e))
        );
      }
      
      readById(id: string): Observable<Project> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.get<Project>(url).pipe(
          map(obj => obj),
          catchError(e => this.errorHandler(e))
        );
      }
      
      update(Project: Project): Observable<Project> {
        return this.http.put<Project>(this.baseUrl, Project).pipe(
          map(obj => obj),
          catchError(e => this.errorHandler(e))
        );
      }
      
      delete(id: string): Observable<Project> {
        const url = `${this.baseUrl}/delete/${id}`;
        return this.http.post<Project>(url, null).pipe(
          map(obj => obj),
          catchError(e => this.errorHandler(e))
        );
      }

      errorHandler(e: any): Observable<any> {
        this.showMessage('Ocorreu um erro!', true);
        return EMPTY;
      }
}

