import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DssButtonModule } from '@dss/components/button';
import { DssIconModule } from '@dss/components/icon';
import { DssTypographyModule } from '@dss/components/typography';

import { ButtonComponent } from './button.component';

const ROUTES: Routes = [
  { path: '', component: ButtonComponent },
];

@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    DssButtonModule,
    DssIconModule,
    DssTypographyModule,
    DssIconModule,
  ],
})
export class ButtonModule { }
