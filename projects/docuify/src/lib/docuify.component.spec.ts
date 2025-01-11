import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocuifyComponent } from './docuify.component';

describe('DocuifyComponent', () => {
  let component: DocuifyComponent;
  let fixture: ComponentFixture<DocuifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocuifyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocuifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
