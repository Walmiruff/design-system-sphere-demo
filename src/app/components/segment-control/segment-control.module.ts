import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DssSegmentControlModule } from '@dss/components/segment-control';
import { DssTypographyModule } from '@dss/components/typography';

import { SegmentControlComponent } from './segment-control.component';

const ROUTES: Routes = [{ path: '', component: SegmentControlComponent }];

@NgModule({
  declarations: [SegmentControlComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    DssSegmentControlModule,
    DssTypographyModule,
  ],
})
export class SegmentControlModule {}
