import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { WorkHours } from './work-hours.model';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class WorkHoursService {

    baseUrl = "/api/workinghours"

    constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

    showMessage(msg: string, isError: boolean = false): void {
        this.snackBar.open(msg, 'x', {
          duration: 3000,
          horizontalPosition: "right",
          verticalPosition: "top",
          panelClass: isError ? ['msg-error'] : ['msg-success']
        });
      }

    create(WorkHours: WorkHours): Observable<WorkHours> {
        const url = `${this.baseUrl}/insert`;
        return this.http.post<WorkHours>(url, WorkHours).pipe(
          map(obj => obj),
          catchError(e => this.errorHandler(e))
        );
      }
    
      
      read(): Observable<WorkHours[]> {
        return this.http.get<WorkHours[]>(this.baseUrl).pipe(
          map(obj => obj),
          catchError(e => this.errorHandler(e))
        );
      }

      getWeekRank(): Observable<WorkHours[]> {
        const url = `${this.baseUrl}/getWeekRank`;
        return this.http.get<WorkHours[]>(url).pipe(
          map(obj => obj),
          catchError(e => this.errorHandler(e))
        );
      }

      errorHandler(e: any): Observable<any> {
        this.showMessage('Ocorreu um erro!', true);
        return EMPTY;
      }
}