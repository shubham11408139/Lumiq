import { TestBed } from '@angular/core/testing';

import { KeypadService } from './keypad.service';

describe('KeypadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KeypadService = TestBed.get(KeypadService);
    expect(service).toBeTruthy();
  });
});
