import { TestBed } from '@angular/core/testing';

import { FetchPreviewService } from './fetch-preview.service';

describe('FetchPreviewService', () => {
  let service: FetchPreviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchPreviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
