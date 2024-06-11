import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DssDividerModule } from '@dss/components/divider';
import { DssTypographyModule } from '@dss/components/typography';

import { DividerComponent } from './divider.component';

const ROUTES: Routes = [
  { path: '', component: DividerComponent },
];

@NgModule({
  declarations: [DividerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    DssDividerModule,
    DssTypographyModule,
  ],
  exports: [DividerComponent],
})
export class DividerModule { }
