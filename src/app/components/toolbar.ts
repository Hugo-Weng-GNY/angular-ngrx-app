import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'bc-toolbar',
  template: `
    <md-toolbar color="primary">
      <button md-icon-button (click)="openMenu.emit()">
        <md-icon>menu</md-icon>
      </button>
      <ng-content></ng-content>
      <button md-button color="accent" class="md-raised" (click)="closeMenu.emit()">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Close Navigation Menu
      </button>
    </md-toolbar>
  `
})
export class ToolbarComponent {
  @Output() openMenu = new EventEmitter();
  @Output() closeMenu = new EventEmitter();
}
