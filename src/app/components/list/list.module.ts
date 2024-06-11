import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DssIconModule } from '@dss/components/icon';
import { DssListModule } from '@dss/components/list';
import { DssTypographyModule } from '@dss/components/typography';

import { ListComponent } from './list.component';

const ROUTES: Routes = [{ path: '', component: ListComponent }];

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    DssIconModule,
    DssListModule,
    DssTypographyModule,
  ],
})
export class ListModule {}
