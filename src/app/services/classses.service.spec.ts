import { TestBed } from '@angular/core/testing';

import { ClasssesService } from './classses.service';

describe('ClasssesService', () => {
  let service: ClasssesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClasssesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
