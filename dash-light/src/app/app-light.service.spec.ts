import { TestBed, inject } from '@angular/core/testing';

import { AppLightService } from './app-light.service';

describe('AppLightService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppLightService]
    });
  });

  it('should be created', inject([AppLightService], (service: AppLightService) => {
    expect(service).toBeTruthy();
  }));
});
