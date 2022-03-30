import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Data } from '../utils/data';



@Injectable({
  providedIn: 'root'
})
export class dadosService {

  urlMundo = 'https://api.covid19api.com/summary' /* Casos no mundo*/

  constructor(
    private httpClient : HttpClient
  ) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  getCasosMundo(): Observable<Data[]> {
    return this.httpClient.get<Data[]>(this.urlMundo)
      .pipe(
        retry(2),
        catchError(throwError))
  }

}
