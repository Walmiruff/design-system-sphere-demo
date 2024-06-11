import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DssContainerModule } from '@dss/components/container';
import { DssTypographyModule } from '@dss/components/typography';

import { ContainerComponent } from './container.component';

const ROUTES: Routes = [
  { path: '', component: ContainerComponent },
];

@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    DssContainerModule,
    DssTypographyModule,
  ],
})
export class ContainerModule { }
