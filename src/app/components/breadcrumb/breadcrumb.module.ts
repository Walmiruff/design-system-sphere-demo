import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DssBreadcrumbModule } from '@dss/components/breadcrumb';
import { DssTypographyModule } from '@dss/components/typography';

import { BreadcrumbComponent } from './breadcrumb.component';

const ROUTES: Routes = [
  { path: '', component: BreadcrumbComponent },
];

@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    DssBreadcrumbModule,
    DssTypographyModule,
  ],
})
export class BreadcrumbModule { }
