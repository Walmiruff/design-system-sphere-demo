import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DssAlertToastModule } from '@dss/components/alert-toast';
import { DssButtonModule } from '@dss/components/button';
import { DssTypographyModule } from '@dss/components/typography';

import { AlertToastComponent } from './alert-toast.component';

const ROUTES: Routes = [
  { path: '', component: AlertToastComponent },
];

@NgModule({
  declarations: [AlertToastComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    DssAlertToastModule,
    DssButtonModule,
    DssTypographyModule,
  ],
})
export class AlertToastModule { }
