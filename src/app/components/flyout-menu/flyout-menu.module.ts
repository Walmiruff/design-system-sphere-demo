import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DssFlyoutMenuModule } from '@dss/components/flyout-menu';
import { DssTypographyModule } from '@dss/components/typography';

import { FlyoutMenuComponent } from './flyout-menu.component';

const ROUTES: Routes = [
  { path: '', component: FlyoutMenuComponent },
];

@NgModule({
  declarations: [FlyoutMenuComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    DssFlyoutMenuModule,
    DssTypographyModule,
  ],
  exports: [FlyoutMenuComponent],
})
export class FlyoutMenuModule { }
