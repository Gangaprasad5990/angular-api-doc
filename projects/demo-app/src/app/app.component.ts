import { Component, ViewEncapsulation } from '@angular/core';
import { DocuifyComponent } from 'docuify';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DocuifyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'demo-app';
}
