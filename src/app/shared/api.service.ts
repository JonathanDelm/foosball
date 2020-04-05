import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, delay } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Match } from '../models/match.model';
import { BACKEND_URL } from 'src/environments/environment';
import { Player } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  // endpoint: string = 'http://localhost:4000/api';
  endpoint: string;

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {
      this.endpoint = BACKEND_URL;
  }

  // Add match
  AddMatch(data: Match): Observable<any> {
    let API_URL = `${this.endpoint}/add-match`;
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
        // delay(1000),
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

  // Get all players
  GetPlayers(): Observable<any> {
    var API_URL = `${this.endpoint}/players`;
    return this.http
    .get(API_URL)
    .pipe(
      // delay(1000),
      map((list: any[]): Player[] =>
        list.map(Player.fromJSON)
      )
    );
  }

  // Get solo matches per player
  GetSoloMatches(): Observable<any> {
  var API_URL = `${this.endpoint}/solo-matches`;
  return this.http.get(API_URL, { headers: this.headers }).pipe(
    map((res: Response) => {
      return res || {}
    }),
    catchError(this.errorMgmt)
  )
}

  // Get solo winner per player
  GetSoloWins(): Observable<any> {
    var API_URL = `${this.endpoint}/solo-wins`;
    return this.http.get(API_URL, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  // Get solo matches per player
  GetDuoMatches(): Observable<any> {
    var API_URL = `${this.endpoint}/duo-matches`;
    return this.http.get(API_URL, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  // Get duo winner counts
  GetDuoWins(): Observable<any> {
    var API_URL = `${this.endpoint}/duo-wins`;
    return this.http.get(API_URL, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
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