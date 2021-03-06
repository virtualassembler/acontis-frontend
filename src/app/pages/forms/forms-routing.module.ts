import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';

import { FormsComponent } from './forms.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ContadoresComponent } from './contadores/contadores.component';


const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      {
        path: 'inputs',
        component: FormInputsComponent,
      },
      {
        path: 'layouts',
        component: FormLayoutsComponent,
      },
      {
        path: 'layouts',
        component: FormLayoutsComponent,
      },
      {
        path: 'buttons',
        component: ButtonsComponent,
      },
      {
        path: 'datepicker',
        component: DatepickerComponent,
      },
      {
        path: 'contadores',
        component: ContadoresComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MatSliderModule,
    MatTableModule
  ],
  exports: [
    RouterModule,
    MatSliderModule,
    MatTableModule
  ],
})
export class FormsRoutingModule {
}

