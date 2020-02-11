import { Component, OnInit, ModuleWithProviders, ViewChild } from '@angular/core';
import { Router, RouterModule, ActivatedRoute, Params, PreloadAllModules } from '@angular/router';
import { UserService } from '../../../@core/mock/users.service';
import { stringify } from 'querystring';
import {MatTable} from '@angular/material';
import { PsoService } from '../pso.service';
import { IPso } from '../pso';
import { HttpClient } from '@angular/common/http';

/*
let ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'HUDC', nit: '900824578', address: 'cll 22 # 25-65', telephone: '6645711', email: 'info@gmail.com'},
  {position: 2, name: 'UNISINU', nit: '900824578', address: 'cll 22 # 25-65', telephone: '6645700', email: 'info@gmail.com'},
];

export interface PeriodicElement {
  position: number;
  name: string;
  nit: string;
  address: string;
  telephone: string;  
  email: string;
}
*/

@Component({
  selector: 'ngx-psocomponent',
  templateUrl: './psocomponent.component.html',
  styleUrls: ['./psocomponent.component.scss'],
})

export class PsocomponentComponent implements OnInit {

  public title: string
  public tableTitle: string
  public name: string
  public nit: string
  public address: string
  public telephone: string
  public email: string
  public pso = [];
  postData:{}

  constructor(
    private _route: ActivatedRoute,
    private _router: ActivatedRoute,
    private _user_service: UserService,
    private _psoService: PsoService,
    private http:HttpClient
    ) {
      this.title = "Nueva empresa"
      this.tableTitle = "Empresas"
      this.name = ""
      this.nit = ""
      this.address = ""
      this.telephone = ""
      this.email = ""
    }

  ngOnInit() {
    console.log("aag")
    //console.log(JSON.stringify(this._psoService.getleagues()))
    this._psoService.getleagues().subscribe(data => this.dataSource = data)
  }

  displayedColumns: string[] = ['position', 'name', 'nit', 'telephone'];
  //dataSource = ELEMENT_DATA;
  dataSource = this.pso;
  @ViewChild(MatTable,null) table: MatTable<IPso>;

  updateDataSource(){
    //ELEMENT_DATA.push({position: 8, name: this.name, nit: this.nit, address: this.address,  telephone: this.address, email: this.email});
    //this.dataSource = ELEMENT_DATA;
    //this.pso.push({position: 8, name: this.name, nit: this.nit, address: this.address,  telephone: this.address, email: this.email});
    //this.pso.push({id_company: 8, name_company: this.name, nit_company: this.nit, address_company: this.address,  telephone_company: this.address, email_company: this.email});
    this.pso.push({id_company: 8, name_company: this.name, nit_company: this.nit, address_company: this.address,  telephone_company: this.address, email_company: this.email});
    console.log(this.name)
    //this line cause datasource be just one element and erase the prevoius content
    //this.dataSource = this.pso;
    this.table.renderRows();
    this.postData={"name_company": this.name, "nit_company": this.nit, "address_company": this.address,  "telephone_company": this.address, "email_company": this.email};
    this.http.post("http://localhost/acontis-backend/public/api/companies",this.postData).toPromise().then((data:any) =>{
      console.log(data);
      console.log(data);

    })
  }

}
