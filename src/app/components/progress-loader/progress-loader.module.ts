import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DssButtonModule } from '@dss/components/button';
import { DssProgressLoaderModule } from '@dss/components/progress-loader';
import { DssTypographyModule } from '@dss/components/typography';

import { ProgressLoaderComponent } from './progress-loader.component';

const ROUTES: Routes = [
  { path: '', component: ProgressLoaderComponent },
];

@NgModule({
  declarations: [ProgressLoaderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    DssProgressLoaderModule,
    DssButtonModule,
    DssTypographyModule,
  ],
})
export class ProgressLoaderModule { }
