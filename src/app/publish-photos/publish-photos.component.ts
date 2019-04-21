import { Component, OnInit } from '@angular/core';
import { ElementRef, Renderer2 } from '@angular/core';
import { forEach, isEmpty, find } from "lodash";
import { utils } from "../service/common/utils"

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
    private renderer2: Renderer2
  ) { }

  ngOnInit() {
    this.initChangeEvent();
  }

  previewPhotos(files) {

    if (isEmpty(files)) return;

    var self = this;

    function readAndPreview(file) {

      // 照片的size不允许大于10MB
      if (file.size > 2*1024*1024) {
        self.oversizePhotos.push(file.name);
      }

      let reader = new FileReader();

      reader.addEventListener("load", function () {
        var existedURL = find(self.uploadedPhotosURL, url => url == this.result);
        if (!existedURL) {
          self.uploadedPhotosURL.push(this.result);
        }
      });

      console.log("size", file.size);

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
    utils.invokeHandler(this.elementRef.nativeElement.querySelector("#upload"), "click");
  }
}
