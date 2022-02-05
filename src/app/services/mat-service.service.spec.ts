import { TestBed } from '@angular/core/testing';

import { MatServiceService } from './mat-service.service';

describe('MatServiceService', () => {
  let service: MatServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
