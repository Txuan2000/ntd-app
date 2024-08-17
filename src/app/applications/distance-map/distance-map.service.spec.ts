import { TestBed } from '@angular/core/testing';

import { DistanceMapService } from './distance-map.service';

describe('DistanceMapService', () => {
  let service: DistanceMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistanceMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
