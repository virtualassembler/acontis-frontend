import { Component, OnInit, ModuleWithProviders, ViewChild } from '@angular/core';
import { Router, RouterModule, ActivatedRoute, Params, PreloadAllModules } from '@angular/router';
import { UserService } from '../../../@core/mock/users.service';
import { stringify } from 'querystring';
import {MatTable} from '@angular/material';
import { PsoService } from '../pso.service';
import { IPso } from '../pso';
import { HttpClient } from '@angular/common/http';

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
    this._psoService.getleagues().subscribe(data => this.dataSource = data)
  }

  displayedColumns: string[] = ['position', 'name', 'nit', 'telephone'];
  dataSource = this.pso;
  @ViewChild(MatTable,null) table: MatTable<IPso>;

  updateDataSource(){
    if(this.name != "" && this.nit != "" && this.address != "" && this.telephone != "" && this.email != ""){
      this.pso.push({id_company: 8, name_company: this.name, nit_company: this.nit, address_company: this.address,  telephone_company: this.telephone, email_company: this.email});
      console.log(this.name)
      this.table.renderRows();
      this.postData={"name_company": this.name, "nit_company": this.nit, "address_company": this.address,  "telephone_company": this.telephone, "email_company": this.email};
      this.http.post("http://biinyugames.com/acontis/acontis-backend/public/api/companies",this.postData).toPromise().then((data:any) =>{
        this._psoService.getleagues().subscribe(data => this.dataSource = data)
      })
      this.name = ""
      this.nit = ""
      this.address = ""
      this.telephone = ""
      this.email = ""
    }
  }
  
}
