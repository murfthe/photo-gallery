import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {ErrorHandlerService} from '../error-handler/error-handler.service';
import {LogService} from '../log/log.service';

@Injectable({ providedIn: 'root' })
export class PhotoCategoryService {

  constructor(
    private http: HttpClient,
    private errorHandler: ErrorHandlerService,
    private logService: LogService
  ) { }

  private serviceUrl = '/api/service/dataSource';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getSomething(): Observable<any> {
    return this.http.get<any>(this.serviceUrl, this.httpOptions)
      .pipe(
        tap(_ => this.logService.info("fetched something")),
        catchError(this.errorHandler.handleError('getSomething', []))
      );
  }
}
