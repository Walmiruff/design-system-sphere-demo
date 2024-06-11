import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DssButtonModule } from '@dss/components/button';
import { DssFormFieldModule } from '@dss/components/form-field';
import { DssInputNumberModule } from '@dss/components/input-number';
import { DssTypographyModule } from '@dss/components/typography';

import { InputNumberComponent } from './input-number.component';

const ROUTES: Routes = [
  { path: '', component: InputNumberComponent },
];

@NgModule({
  declarations: [InputNumberComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    DssFormFieldModule,
    DssButtonModule,
    DssTypographyModule,
    DssInputNumberModule,
  ],
  exports: [InputNumberComponent],
})
export class InputNumberModule { }
