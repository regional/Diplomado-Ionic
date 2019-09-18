import { TestBed } from '@angular/core/testing';

import { NewsServices } from './news.services';

describe('NewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsServices = TestBed.get(NewsServices);
    expect(service).toBeTruthy();
  });
});
