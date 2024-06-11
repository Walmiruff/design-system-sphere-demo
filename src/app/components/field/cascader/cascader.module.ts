import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DssButtonModule } from '@dss/components/button';
import { DssCascaderModule } from '@dss/components/cascader';
import { DssFormFieldModule } from '@dss/components/form-field';
import { DssTypographyModule } from '@dss/components/typography';

import { CascaderComponent } from './cascader.component';

const ROUTES: Routes = [
  { path: '', component: CascaderComponent },
];

@NgModule({
  declarations: [CascaderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    FormsModule,
    ReactiveFormsModule,
    DssButtonModule,
    DssFormFieldModule,
    DssCascaderModule,
    DssTypographyModule,
  ],
  exports: [CascaderComponent],
})
export class CascaderModule { }
