import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent {
  menuItems = [
    'Introduction',
    'Getting Started',
    'API Reference',
    'FAQ',
    'Support',
  ];
}
