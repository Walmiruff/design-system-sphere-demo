import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DssStatusBarModule } from '@dss/components/status-bar';
import { DssTypographyModule } from '@dss/components/typography';

import { StatusBarComponent } from './status-bar.component';

const ROUTES: Routes = [
  { path: '', component: StatusBarComponent },
];

@NgModule({
  declarations: [StatusBarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    DssStatusBarModule,
    DssTypographyModule,
  ],
})
export class StatusBarModule { }
