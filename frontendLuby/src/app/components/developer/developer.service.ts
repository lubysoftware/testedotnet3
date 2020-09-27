import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Developer } from './developer.model';
import { EMPTY, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DeveloperService {

    baseUrl = "/api/developer";

    constructor(private http: HttpClient, private snackBar: MatSnackBar){}

    showMessage(msg: string, isError: boolean = false): void {
        this.snackBar.open(msg, 'x', {
          duration: 3000,
          horizontalPosition: "right",
          verticalPosition: "top",
          panelClass: isError ? ['msg-error'] : ['msg-success']
        });
      }

    create(Developer: Developer): Observable<Developer> {
        const url = `${this.baseUrl}/insert`;
        return this.http.post<Developer>(url, Developer).pipe(
          map(obj => obj),
          catchError(e => this.errorHandler(e))
        );
      }
    
      
      read(): Observable<Developer[]> {
        return this.http.get<Developer[]>(this.baseUrl).pipe(
          map(obj => obj),
          catchError(e => this.errorHandler(e))
        );
      }
      
      readById(id: string): Observable<Developer> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.get<Developer>(url).pipe(
          map(obj => obj),
          catchError(e => this.errorHandler(e))
        );
      }
      
      update(Developer: Developer): Observable<Developer> {
        return this.http.put<Developer>(this.baseUrl, Developer).pipe(
          map(obj => obj),
          catchError(e => this.errorHandler(e))
        );
      }
      
      delete(id: string): Observable<Developer> {
        const url = `${this.baseUrl}/delete/${id}`;
        return this.http.post<Developer>(url, null).pipe(
          map(obj => obj),
          catchError(e => this.errorHandler(e))
        );
      }

      errorHandler(e: any): Observable<any> {
        this.showMessage('Ocorreu um erro!', true);
        return EMPTY;
      }

}