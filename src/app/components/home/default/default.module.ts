import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DssTypographyModule } from '@dss/components/typography';

import { ROUTES_CHILDREN } from '../../../app.routes';
import { DefaultComponent } from './default.component';

const ROUTES: Routes = [
  { path: '', component: DefaultComponent },
  ...ROUTES_CHILDREN,
];

@NgModule({
  declarations: [DefaultComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    DssTypographyModule,
  ],
})
export class DefaultModule { }
