import { Component, OnInit } from '@angular/core';
import { bodyScrollEvent } from "../service/body-scroll-event.js";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.addEventOnMenu();
  }

  addEventOnMenu():void {
    bodyScrollEvent.removeBgColorIfScrollDown();
  }

}
