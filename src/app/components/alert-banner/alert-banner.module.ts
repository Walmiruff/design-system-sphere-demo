import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DssAlertBannerModule } from '@dss/components/alert-banner';
import { DssButtonModule } from '@dss/components/button';
import { DssTypographyModule } from '@dss/components/typography';
import { DssIconModule } from '@dss/components';

import { AlertBannerComponent } from './alert-banner.component';

const ROUTES: Routes = [
  { path: '', component: AlertBannerComponent },
];

@NgModule({
  declarations: [AlertBannerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    DssAlertBannerModule,
    DssButtonModule,
    DssTypographyModule,
    DssIconModule,
  ],
})
export class AlertBannerModule { }
