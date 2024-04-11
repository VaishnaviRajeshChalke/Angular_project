import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private _httpClient: HttpClient) {}
  // ------GET------------
  get(url: string): Observable<any> {
    return this._httpClient.get(url);
  }
  // ------Post------------
  post(url: string, model: any): Observable<any> {
    const body = JSON.stringify(model);
    let httpheaders = new HttpHeaders().set('Content-Type', 'application/json');
    return this._httpClient.post(url, body, {
      headers: httpheaders,
    });
  }
  postImage(url: string, model: any): Observable<any> {
    return this._httpClient.post(url, model);
  }
  // ------PUT------------

  put(url: string, id: number, model: any): Observable<any> {
    const body = JSON.stringify(model);
    let httpheaders = new HttpHeaders().set('Content-Type', 'application/json');
    return this._httpClient.post(url + id, body, {
      headers: httpheaders,
    });
  }
  // ------DELETE------------
  delete(url: string, id: number): Observable<any> {
    return this._httpClient.delete(url + id);
  }
}
