import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DssPaginationModule } from '@dss/components/pagination';
import { DssTypographyModule } from '@dss/components/typography';

import { PaginationComponent } from './pagination.component';

const ROUTES: Routes = [{ path: '', component: PaginationComponent }];

@NgModule({
  declarations: [PaginationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    DssPaginationModule,
    DssTypographyModule,
  ],
})
export class PaginationModule {}
