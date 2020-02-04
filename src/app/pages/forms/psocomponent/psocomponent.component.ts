import { Component, OnInit, ModuleWithProviders } from '@angular/core';
import { Router, RouterModule, ActivatedRoute, Params, PreloadAllModules } from '@angular/router';
import { UserService } from '../../../@core/mock/users.service';

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'HUDC', nit: 900824578, telephone: '6645711'},
  {position: 2, name: 'UNISINU', nit: 900824578, telephone: '6645700'},
  {position: 3, name: 'COMFENALCO', nit: 900824578, telephone: '6645786'},
  {position: 4, name: 'ARGOS', nit: 900824440, telephone: '6645725'},
  {position: 5, name: 'HOCOL', nit: 900824512, telephone: '6645799'},
  {position: 6, name: 'MEXICHEN', nit: 900635542, telephone: '6439810'},
];

export interface PeriodicElement {
  name: string;
  position: number;
  nit: number;
  telephone: string;
}

@Component({
  selector: 'ngx-psocomponent',
  templateUrl: './psocomponent.component.html',
  styleUrls: ['./psocomponent.component.scss'],
  providers: [UserService]
})

export class PsocomponentComponent implements OnInit {

  public title: String
  public tableTitle: String
  public name: String
  public nit: String
  public address: String
  public telephone: String
  public email: String

  constructor(
    private _route: ActivatedRoute,
    private _router: ActivatedRoute,
    private _user_service: UserService
    ) {
      this.title = "Nueva empresa"
      this.tableTitle = "Empresas"
    }

  displayedColumns: string[] = ['position', 'name', 'nit', 'telephone'];
  dataSource = ELEMENT_DATA;

  ngOnInit() {
  }

}
