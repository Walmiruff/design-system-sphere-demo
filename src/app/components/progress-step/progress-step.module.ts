import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DssButtonModule } from '@dss/components/button';
import { DssProgressStepModule } from '@dss/components/progress-step';
import { DssTypographyModule } from '@dss/components/typography';

import { ProgressStepComponent } from './progress-step.component';

const ROUTES: Routes = [
  { path: '', component: ProgressStepComponent },
];

@NgModule({
  declarations: [ProgressStepComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    DssButtonModule,
    DssProgressStepModule,
    DssTypographyModule,
  ],
})
export class ProgressStepModule { }
