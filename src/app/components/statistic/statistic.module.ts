import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DssIconModule } from '@dss/components/icon';
import { DssStatisticModule } from '@dss/components/statistic';
import { DssStatusArrowModule } from '@dss/components/status-arrow';
import { DssTypographyModule } from '@dss/components/typography';

import { StatisticComponent } from './statistic.component';

const ROUTES: Routes = [
  { path: '', component: StatisticComponent },
];

@NgModule({
  declarations: [StatisticComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    DssStatisticModule,
    DssIconModule,
    DssTypographyModule,
    DssStatusArrowModule,
  ],
})
export class StatisticModule { }
