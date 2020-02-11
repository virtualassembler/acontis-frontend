import { Component, OnInit, ModuleWithProviders, ViewChild } from '@angular/core';
import { Router, RouterModule, ActivatedRoute, Params, PreloadAllModules } from '@angular/router';
import { UserService } from '../../../@core/mock/users.service';
import { stringify } from 'querystring';
import {MatTable} from '@angular/material';
import { ContadoresService } from '../contadores.service';
import { IContadores } from '../contadores';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngx-contadores',
  templateUrl: './contadores.component.html',
  styleUrls: ['./contadores.component.scss']
})
export class ContadoresComponent implements OnInit {

  public title: string;
  public tableTitle: string;
  public name: string;
  public dni: string;
  public address: string;
  public telephone: string;
  public email: string;
  public contadores = [];
  postData:{}

  constructor(
    private _route: ActivatedRoute,
    private _router: ActivatedRoute,
    private _user_service: UserService,
    private _psoService: ContadoresService,
    private http:HttpClient
    ) {
      this.title = "Registrar Usuario"
      this.tableTitle = "Contadores"
      this.name = ""
      this.dni = ""
      this.address = ""
      this.telephone = ""
      this.email = ""
    }

  ngOnInit() {
    console.log("aav")
    this._psoService.getContadores().subscribe(data => this.dataSource = data)
  }

  displayedColumns: string[] = ['position', 'name', 'dni', 'telephone'];
  dataSource = this.contadores;
  @ViewChild(MatTable,null) table: MatTable<IContadores>;

  updateDataSource(){
    this.contadores.push({id_contador: 8, name_contador: this.name, dni_contador: this.dni, address_contador: this.address,  telephone_contador: this.telephone, email_contador: this.email});
    console.log(this.name)
    this.table.renderRows();
    this.postData={"name_contador": this.name, "dni_contador": this.dni, "address_contador": this.address,  "telephone_contador": this.telephone, "email_contador": this.email};
    this.http.post("http://biinyugames.com/acontis/acontis-backend/public/api/contadores",this.postData).toPromise().then((data:any) =>{
      this._psoService.getContadores().subscribe(data => this.dataSource = data)
    })
    this.name = ""
    this.dni = ""
    this.address = ""
    this.telephone = ""
    this.email = ""
  }

}
