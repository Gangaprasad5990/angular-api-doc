import { TestBed } from '@angular/core/testing';

import { DocuifyService } from './docuify.service';

describe('DocuifyService', () => {
  let service: DocuifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocuifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
