import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DssButtonModule } from '@dss/components/button';
import { DssFormFieldModule } from '@dss/components/form-field';
import { DssTypographyModule } from '@dss/components/typography';

import { InputClearComponent } from './input-clear.component';

const ROUTES: Routes = [
  { path: '', component: InputClearComponent },
];

@NgModule({
  declarations: [InputClearComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    DssFormFieldModule,
    DssButtonModule,
    DssTypographyModule,
  ],
  exports: [InputClearComponent],
})
export class InputClearModule { }
