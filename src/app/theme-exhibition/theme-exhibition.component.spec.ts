import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeExhibitionComponent } from './theme-exhibition.component';

describe('ThemeExhibitionComponent', () => {
  let component: ThemeExhibitionComponent;
  let fixture: ComponentFixture<ThemeExhibitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeExhibitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeExhibitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
