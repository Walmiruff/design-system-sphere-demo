import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DssTooltipModule } from '@dss/components/tooltip';
import { DssTypographyModule } from '@dss/components/typography';

import { TypographyComponent } from './typography.component';

const ROUTES: Routes = [
  { path: '', component: TypographyComponent },
];

@NgModule({
  declarations: [TypographyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    DssTypographyModule,
    DssTooltipModule,
  ],
})
export class TypographyModule { }
