import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishPhotosComponent } from './publish-photos.component';

describe('PublishPhotosComponent', () => {
  let component: PublishPhotosComponent;
  let fixture: ComponentFixture<PublishPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
