import { Component, OnInit, ModuleWithProviders, ViewChild } from '@angular/core';
import { Router, RouterModule, ActivatedRoute, Params, PreloadAllModules } from '@angular/router';
import { UserService } from '../../../@core/mock/users.service';
import { stringify } from 'querystring';
import {MatTable} from '@angular/material';

let ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'HUDC', nit: '900824578', address: 'cll 22 # 25-65', telephone: '6645711', email: 'info@gmail.com'},
  {position: 2, name: 'UNISINU', nit: '900824578', address: 'cll 22 # 25-65', telephone: '6645700', email: 'info@gmail.com'},
  /*
  {position: 3, name: 'COMFENALCO', nit: '900824578', address: 'cll 22 # 25-65', telephone: '6645786', email: 'info@gmail.com'},
  {position: 4, name: 'ARGOS', nit: '900824440', address: 'cll 22 # 25-65', telephone: '6645725', email: 'info@gmail.com'},
  {position: 5, name: 'HOCOL', nit: '900824512', address: 'cll 22 # 25-65', telephone: '6645799', email: 'info@gmail.com'},
  {position: 6, name: 'MEXICHEN', nit: '900635542', address: 'cll 22 # 25-65', telephone: '6439810', email: 'info@gmail.com'},
  */
];

export interface PeriodicElement {
  position: number;
  name: string;
  nit: string;
  address: string;
  telephone: string;  
  email: string;
}

@Component({
  selector: 'ngx-psocomponent',
  templateUrl: './psocomponent.component.html',
  styleUrls: ['./psocomponent.component.scss'],
  //providers: [UserService],
})

export class PsocomponentComponent implements OnInit {

  public title: string
  public tableTitle: string
  public name: string
  public nit: string
  public address: string
  public telephone: string
  public email: string

  constructor(
    private _route: ActivatedRoute,
    private _router: ActivatedRoute,
    private _user_service: UserService
    ) {
      this.title = "Nueva empresa"
      this.tableTitle = "Empresas"
      this.name = ""
      this.nit = ""
      this.address = ""
      this.telephone = ""
      this.email = ""
    }

  displayedColumns: string[] = ['position', 'name', 'nit', 'telephone'];
  dataSource = ELEMENT_DATA;
  @ViewChild(MatTable,null) table: MatTable<any>;

  updateDataSource(){
    ELEMENT_DATA.push({position: 8, name: this.name, nit: this.nit, address: this.address,  telephone: this.address, email: this.email});
    console.log("ELEMENT_DATA")
    console.log(ELEMENT_DATA)
    console.log("datasource")
    console.log(ELEMENT_DATA)
    this.dataSource = ELEMENT_DATA;
    console.log("")
    console.log("")
    this.table.renderRows();
  }

  ngOnInit() {
  }

}
