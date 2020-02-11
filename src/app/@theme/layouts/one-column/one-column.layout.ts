import { Component } from '@angular/core';

@Component({
  selector: 'ngx-one-column-layout',
  styleUrls: ['./one-column.layout.scss'],
  template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" style="background-image: url('assets/images/sidebar.jpg');background-color: rgba(0, 147, 146, 1);" tag="menu-sidebar" responsive>
        <ng-content style="color:#FAFAFA;" select="nb-menu"></ng-content>
        <img style="width:170px;margin-top:480px;" src="assets/images/logo.png"/>
      </nb-sidebar>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
})
export class OneColumnLayoutComponent {}
