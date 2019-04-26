import { Component, OnInit } from '@angular/core';
import { ElementRef, Renderer2 } from '@angular/core';
import { forEach, isEmpty, find } from "lodash";
import { UtilsService } from '../service/common/utils/utils.service';
import {PublishPhotosService} from '../service/publish-photos/publish-photos.service';

@Component({
  selector: 'app-publish-photos',
  templateUrl: './publish-photos.component.html',
  styleUrls: ['./publish-photos.component.less']
})
export class PublishPhotosComponent implements OnInit {

  public uploadedPhotosURL:any = [];

  public oversizePhotos = [];

  constructor(
    private elementRef: ElementRef,
    private renderer2: Renderer2,
    private utils: UtilsService,
    private publishService: PublishPhotosService
  ) { }

  ngOnInit() {
    this.initChangeEvent();
    this.getPost();
  }

  previewPhotos(files) {

    if (isEmpty(files)) return;

    var self = this;

    function readAndPreview(file) {

      // 照片的size不允许大于10MB
      if (file.size > 10*1024*1024) {
        self.oversizePhotos.push(file.name);
      }

      let reader = new FileReader();

      reader.addEventListener("load", function () {
        var existedURL = find(self.uploadedPhotosURL, url => url == this.result);
        if (!existedURL) {
          self.uploadedPhotosURL.push(this.result);
        }
      });

      reader.readAsDataURL(file);
    }

    [].forEach.call(files, readAndPreview);

  }


  initChangeEvent() {
    let self = this;
    self.renderer2.listen(self.elementRef.nativeElement.querySelector("#upload"), "change", function (event) {
      self.previewPhotos(event.target.files);
    });
  }

  triggerClick() {
    this.utils.invokeHandler(this.elementRef.nativeElement.querySelector("#upload"), "click");
  }

  deletePhoto(index) {
    this.uploadedPhotosURL.splice(index, 1);
  }

  getPost() {
    this.publishService.getPost().subscribe(post => {
      console.log(post);
    })
  }
}
