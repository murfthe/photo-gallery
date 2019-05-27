import { Component, OnInit } from '@angular/core';
import {PhotoCategoryService} from '../service/photo-category/photo-category.service';

@Component({
  selector: 'app-photo-category',
  templateUrl: './photo-category.component.html',
  styleUrls: ['./photo-category.component.less']
})
export class PhotoCategoryComponent implements OnInit {

  constructor(
    private photoCategoryService: PhotoCategoryService
  ) {}

  categories: any[] = [
    {
      name: '纪实摄影',
      english: 'Documentary Photos',
      items: [
        '黑桥村',
        '地铁里的人',
        '青年路',
        '亦庄-万源街',
        '等红灯',
        '白石.水射'
      ]
    },
    {
      name: '黑白摄影',
      english: 'Black and White Photos',
      items: [
        '形单影只',
        '抽象.几何',
        '建筑',
        '情绪'
      ]
    }
  ];

  getPhotoCategory(): any {
    // this.photoCategoryService.getSomething().subscribe(dataSource => console.log("dataSources", dataSource));
  }

  ngOnInit() {
    this.getPhotoCategory();
  }

}
