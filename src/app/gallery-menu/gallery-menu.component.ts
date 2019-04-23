import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { GlobalVariable } from '../service/common/global/global.variable';
import { GalleryMenuService } from '../service/gallery-menu/gallery-menu-service.js';

@Component({
  selector: 'app-gallery-menu',
  templateUrl: './gallery-menu.component.html',
  styleUrls: ['./gallery-menu.component.less']
})
export class GalleryMenuComponent implements OnInit {

  constructor(
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.toggleMenuIfScroll();
    this.toggleReturnButton();
  }

  toggleMenuIfScroll() {
    GalleryMenuService.toggleMenuIfScroll();
  }

  toggleReturnButton() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          if (this.location.isCurrentPathEqualTo("/home")) {
            GlobalVariable.isHomePage = true;
            GalleryMenuService.toggleReturnButton();
          } else {
            GlobalVariable.isHomePage = false;
            GalleryMenuService.toggleReturnButton();
          }
        }
      });
  }

}
