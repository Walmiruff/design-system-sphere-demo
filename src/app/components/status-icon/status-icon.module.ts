import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DssStatusIconModule } from '@dss/components/status-icon';
import { DssTypographyModule } from '@dss/components/typography';

import { StatusIconComponent } from './status-icon.component';

const ROUTES: Routes = [
  { path: '', component: StatusIconComponent },
];

@NgModule({
  declarations: [StatusIconComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    DssStatusIconModule,
    DssTypographyModule,
  ],
})
export class StatusIconModule { }
