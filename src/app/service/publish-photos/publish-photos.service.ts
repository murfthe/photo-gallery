import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GlobalVariable} from 'src/app/service/common/global/global.variable';
import { forEach, get } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class PublishPhotosService {

  constructor(
    private http: HttpClient
  ) { }

  public getPost(): Observable<any> {
    const url = GlobalVariable.getRequestPath('/photosPost/all');
    return this.http.get<any>(url, GlobalVariable.getHttpHeader());
  }

  public addPost(post, photos) {
    const url = GlobalVariable.getRequestPath('/photosPost');
    this.http.post<any>(url, post, GlobalVariable.getHttpHeader()).subscribe(result => {
      const postId = get(result, 'id');
      if (postId) {
        forEach(photos, photo => {
          console.log('photo: ', photo);
          const photoForm = new FormData();
          photoForm.set('postId', postId);
          photoForm.set('photo', photo);
          this.uploadPhoto(photoForm);
        });
      }
    });
  }

  public uploadPhoto(formData: FormData) {
    const url = GlobalVariable.getRequestPath('/photosPost/upload');
    return this.http.post<any>(url, formData).subscribe(result => {
      console.log('upload result: ', result);
    });
  }
}
