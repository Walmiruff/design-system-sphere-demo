import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DssHeaderModule } from '@dss/components/header';
import { DssIconModule } from '@dss/components/icon';
import { DssTypographyModule } from '@dss/components/typography';

import { HeaderComponent } from './header.component';

const ROUTES: Routes = [
  { path: '', component: HeaderComponent },
];

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    DssHeaderModule,
    DssIconModule,
    DssTypographyModule,
  ],
})
export class HeaderModule { }
