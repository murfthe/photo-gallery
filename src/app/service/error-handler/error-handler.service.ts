import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor() { }

  public handleError<T>(operation = 'operation', result?: T) {
    return (error: T): Observable<T> => {
      // 将日志打印在控制台
      console.log(error);

      console.log(operation + ' 出异常啦~');

      return of(result as T);
    };
  }
}
