import { Component } from '@angular/core';
import { LayoutComponent } from './components/layout/layout.component';

@Component({
  selector: 'docuify',
  standalone: true,
  imports: [LayoutComponent],
  template: `<lib-layout></lib-layout>`,
  styles: ``,
})
export class DocuifyComponent {}
