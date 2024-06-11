import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DssCheckboxModule } from '@dss/components/checkbox';
import { DssTypographyModule } from '@dss/components/typography';

import { CheckboxComponent } from './checkbox.component';

const ROUTES: Routes = [
  { path: '', component: CheckboxComponent },
];

@NgModule({
  declarations: [CheckboxComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ROUTES),
    DssCheckboxModule,
    DssTypographyModule,
  ],
  exports: [CheckboxComponent],
})
export class CheckboxModule { }
