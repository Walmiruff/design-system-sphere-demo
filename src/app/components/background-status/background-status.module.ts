import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DssBackgroundStatusModule } from '@dss/components/background-status';
import { DssTypographyModule } from '@dss/components/typography';

import { BackgroundStatusComponent } from './background-status.component';

const ROUTES: Routes = [
  { path: '', component: BackgroundStatusComponent },
];

@NgModule({
  declarations: [BackgroundStatusComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    DssBackgroundStatusModule,
    DssTypographyModule,
  ],
  exports: [BackgroundStatusComponent],
})
export class BackgroundStatusModule { }
