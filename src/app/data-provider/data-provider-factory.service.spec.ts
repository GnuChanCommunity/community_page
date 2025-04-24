import { TestBed } from '@angular/core/testing';

import { DataProviderFactoryService } from './data-provider-factory.service';

describe('DataProviderFactoryService', () => {
  let service: DataProviderFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataProviderFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
