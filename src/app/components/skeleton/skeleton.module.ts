import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DssButtonModule } from '@dss/components/button';
import { DssSkeletonModule } from '@dss/components/skeleton';
import { DssTypographyModule } from '@dss/components/typography';

import { SkeletonComponent } from './skeleton.component';

const ROUTES: Routes = [
  { path: '', component: SkeletonComponent },
];

@NgModule({
  declarations: [SkeletonComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    DssButtonModule,
    DssSkeletonModule,
    DssTypographyModule,
  ],
})
export class SkeletonModule { }
