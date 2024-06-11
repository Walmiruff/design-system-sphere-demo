import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DssButtonModule } from '@dss/components/button';
import { DssCheckboxModule } from '@dss/components/checkbox';
import { DssTreeviewModule } from '@dss/components/treeview';
import { DssTypographyModule } from '@dss/components/typography';

import { TreeviewComponent } from './treeview.component';

const ROUTES: Routes = [
  { path: '', component: TreeviewComponent },
];

@NgModule({
  declarations: [TreeviewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    DssButtonModule,
    DssCheckboxModule,
    DssTreeviewModule,
    DssTypographyModule,
  ],
})
export class TreeviewModule { }
