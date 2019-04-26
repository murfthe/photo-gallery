import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublishPhotosService {

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type": "application/json"})
  }

  private url = "/api/service/photosPost/all";

  constructor(
    private http: HttpClient
  ) { }

  public getPost(): Observable<any> {
    return this.http.get<any>(this.url, this.httpOptions);
  }
}
