import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'lib-layout',
  standalone: true,
  imports: [SidebarComponent, MainComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
