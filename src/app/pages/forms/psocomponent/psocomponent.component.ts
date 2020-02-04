import { Component, OnInit, ModuleWithProviders } from '@angular/core';
import { Router, RouterModule, ActivatedRoute, Params, PreloadAllModules } from '@angular/router';
import { UserService } from '../../../@core/mock/users.service';


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'HUDC', weight: 900824578, symbol: '6645786'},
  {position: 1, name: 'UNISINU', weight: 900824578, symbol: '6645786'},
  {position: 1, name: 'COMFENALCO', weight: 900824578, symbol: '6645786'},
];

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'ngx-psocomponent',
  templateUrl: './psocomponent.component.html',
  styleUrls: ['./psocomponent.component.scss'],
  providers: [UserService]
})

export class PsocomponentComponent implements OnInit {

  public title: String

  constructor(
    private _route: ActivatedRoute,
    private _router: ActivatedRoute,
    private _user_service: UserService
    ) {
      this.title = "TABLA EMPRESAS"
    }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  ngOnInit() {
  }

}
