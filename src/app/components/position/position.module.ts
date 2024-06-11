import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DssTypographyModule } from '@dss/components/typography';

import { PositionComponent } from './position.component';

const ROUTES: Routes = [
  { path: '', component: PositionComponent },
];

@NgModule({
  declarations: [PositionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    DssTypographyModule,
  ],
})
export class PositionModule { }
