import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DssStatusCircleModule } from '@dss/components/status-circle';
import { DssTypographyModule } from '@dss/components/typography';

import { StatusCircleComponent } from './status-circle.component';

const ROUTES: Routes = [
  { path: '', component: StatusCircleComponent },
];

@NgModule({
  declarations: [StatusCircleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    DssStatusCircleModule,
    DssTypographyModule,
  ],
})
export class StatusCircleModule { }
