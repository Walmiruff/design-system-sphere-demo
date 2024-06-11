import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DssTypographyModule } from '@dss/components/typography';

import { ROUTES_CHILDREN } from '../../../app.routes';
import { OldComponent } from './old.component';

const ROUTES: Routes = [
  { path: '', component: OldComponent },
  ...ROUTES_CHILDREN,
];

@NgModule({
  declarations: [OldComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    DssTypographyModule,
  ],
})
export class OldModule { }
