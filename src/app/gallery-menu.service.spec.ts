import { TestBed } from '@angular/core/testing';

import { GalleryMenuService } from './gallery-menu.service';

describe('GalleryMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GalleryMenuService = TestBed.get(GalleryMenuService);
    expect(service).toBeTruthy();
  });
});
