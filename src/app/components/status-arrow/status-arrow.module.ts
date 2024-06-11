import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DssStatusArrowModule } from '@dss/components/status-arrow';
import { DssTypographyModule } from '@dss/components/typography';

import { StatusArrowComponent } from './status-arrow.component';

const ROUTES: Routes = [
  { path: '', component: StatusArrowComponent },
];

@NgModule({
  declarations: [StatusArrowComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    DssStatusArrowModule,
    DssTypographyModule,
  ],
})
export class StatusArrowModule { }
