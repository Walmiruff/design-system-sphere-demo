import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DssButtonModule } from '@dss/components/button';
import { DssFormFieldModule } from '@dss/components/form-field';
import { DssTypographyModule } from '@dss/components/typography';
import { DssDropdownModule } from '@dss/components/dropdown';

import { InputComponent } from './input.component';

const ROUTES: Routes = [
  { path: '', component: InputComponent },
];

@NgModule({
  declarations: [InputComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    DssFormFieldModule,
    DssButtonModule,
    DssTypographyModule,
    DssDropdownModule,
  ],
  exports: [InputComponent],
})
export class InputModule { }
