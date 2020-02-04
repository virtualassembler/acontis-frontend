import { Component, OnInit, ModuleWithProviders } from '@angular/core';
import { Router, RouterModule, ActivatedRoute, Params, PreloadAllModules } from '@angular/router';
import { UserService } from '../../../@core/mock/users.service';

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

  ngOnInit() {
  }

}
