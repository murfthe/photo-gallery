import {ElementRef, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  public invokeHandler(nativeElement, type) {
    if (!nativeElement || !type) {
      return;
    }
    const ele = new ElementRef(nativeElement);
    ele.nativeElement[type]();
  }

}
