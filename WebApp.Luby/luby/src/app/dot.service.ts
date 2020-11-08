import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Dot } from './dot'; 

var httpOptions = { headers: new HttpHeaders({"Content-Type": "application/json"}) };

@Injectable({
  providedIn: 'root'
})

export class DotService {

  base = 'https://localhost:5001/api/dot';  

  constructor(private http: HttpClient) { }

  getAll(): Observable<Dot[]> {  
    return this.http.get<Dot[]>(this.base);  
  }  

  get(dot_id: string): Observable<Dot> {  
    const url = `${this.base}/${dot_id}`;
    return this.http.get<Dot>(url);  
  } 

  create(dot: Dot): Observable<Dot> {  
    return this.http.post<Dot>(this.base, dot, httpOptions);  
  }  

  update(dot_id: string, dot: Dot): Observable<Dot> {  
    const url = `${this.base}/${dot_id}`;
    return this.http.put<Dot>(url, dot, httpOptions);  
  }  

  delete(dot_id: string): Observable<number> {  
    const url = `${this.base}/${dot_id}`;
    return this.http.delete<number>(url, httpOptions);  
  }
 }  