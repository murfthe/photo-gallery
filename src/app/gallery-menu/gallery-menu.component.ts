import { Component, OnInit } from '@angular/core';
import { bodyScrollEvent } from "../service/body-scroll-event.js";

@Component({
  selector: 'app-gallery-menu',
  templateUrl: './gallery-menu.component.html',
  styleUrls: ['./gallery-menu.component.less']
})
export class GalleryMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.toggleBgColor();
  }

  toggleBgColor() {
    bodyScrollEvent.toggleBgColorIfScroll();
  }

}
