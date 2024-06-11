import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DssBadgeModule } from '@dss/components/badge';
import { DssButtonModule } from '@dss/components/button';
import { DssIconModule } from '@dss/components/icon';
import { DssTypographyModule } from '@dss/components/typography';

import { BadgeComponent } from './badge.component';

const ROUTES: Routes = [
  { path: '', component: BadgeComponent },
];

@NgModule({
  declarations: [BadgeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    DssBadgeModule,
    DssIconModule,
    DssButtonModule,
    DssTypographyModule,
  ],
})
export class BadgeModule { }
