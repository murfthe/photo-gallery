import { TestBed } from '@angular/core/testing';

import { PublishPhotosService } from './publish-photos.service';

describe('PublishPhotosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PublishPhotosService = TestBed.get(PublishPhotosService);
    expect(service).toBeTruthy();
  });
});
