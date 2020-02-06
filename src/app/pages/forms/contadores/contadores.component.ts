import { Component, OnInit, ModuleWithProviders, ViewChild } from '@angular/core';
import { Router, RouterModule, ActivatedRoute, Params, PreloadAllModules } from '@angular/router';
import { UserService } from '../../../@core/mock/users.service';
import { stringify } from 'querystring';
import {MatTable} from '@angular/material';

let ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Juan Pablo Ortiz', nit: '1047836647', address: 'cll 22 # 25-65', telephone: '6645794', email: 'juan@gmail.com'},
  {position: 2, name: 'Ana Maria Barraza', nit: '93785548', address: 'cll 22 # 25-88', telephone: '6645700', email: 'info@gmail.com'},
  {position: 2, name: 'Carlos Garcia', nit: '93785577', address: 'cll 22 # 25-88', telephone: '6645700', email: 'info@gmail.com'},
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
  selector: 'ngx-contadores',
  templateUrl: './contadores.component.html',
  styleUrls: ['./contadores.component.scss']
})
export class ContadoresComponent implements OnInit {

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
      this.title = "Registrar Usuario"
      this.tableTitle = "Contadores"
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
