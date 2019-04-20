import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  error(msg) {
    console.error(msg);
  }

  info(msg) {
    console.log(msg);
  }
}
