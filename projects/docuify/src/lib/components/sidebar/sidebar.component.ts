import { Component, ViewEncapsulation } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'lib-sidebar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent {
  menuItems = [
    { method: 'GET', endpoint: '/api/users' },
    { method: 'POST', endpoint: '/api/users' },
    { method: 'PUT', endpoint: '/api/users/1' },
    { method: 'DELETE', endpoint: '/api/users/1' },
    { method: 'PATCH', endpoint: 'Partially Update User' },
    { method: 'HEAD', endpoint: 'Fetch Headers' },
    { method: 'OPTIONS', endpoint: 'Fetch Options' },
    { method: 'CONNECT', endpoint: 'Establish Connection' },
    { method: 'TRACE', endpoint: 'Trace Route' },
  ];
}
