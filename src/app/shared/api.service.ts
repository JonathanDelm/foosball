import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Match } from '../match.model';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  endpoint: string = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Add match
  AddMatch(data: Match): Observable<any> {
    let API_URL = `${this.endpoint}/add-match`;
    console.log(data.toJSON());
    return this.http.post(API_URL, data.toJSON())
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all matches
  GetMatches() {
    return this.http
      .get(`${this.endpoint}`)
      .pipe(
        map((list: any[]): Match[] =>
          list.map(Match.fromJSON)
        )
      );
  }

  // Get match
  GetMatch(id): Observable<any> {
    let API_URL = `${this.endpoint}/read-match/${id}`;
    return this.http.get(API_URL, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  // Update match
  UpdateMatch(id, data: Match): Observable<any> {
    let API_URL = `${this.endpoint}/update/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Delete match
  DeleteMatch(id): Observable<any> {
    var API_URL = `${this.endpoint}/delete-match/${id}`;
    return this.http.delete(API_URL).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}