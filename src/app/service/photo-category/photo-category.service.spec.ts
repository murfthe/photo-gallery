import { TestBed } from '@angular/core/testing';

import { PhotoCategoryService } from './photo-category.service';

describe('PhotoCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhotoCategoryService = TestBed.get(PhotoCategoryService);
    expect(service).toBeTruthy();
  });
});
