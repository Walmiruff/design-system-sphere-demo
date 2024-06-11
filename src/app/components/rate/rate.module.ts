import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DssRateModule } from '@dss/components/rate';
import { DssTypographyModule } from '@dss/components/typography';
import { RateComponent } from './rate.component';

const ROUTES: Routes = [
  { path: '', component: RateComponent },
];

@NgModule({
  declarations: [RateComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ROUTES),
    DssRateModule,
    DssTypographyModule,
  ],
  exports: [RateComponent],
})
export class RateModule { }
