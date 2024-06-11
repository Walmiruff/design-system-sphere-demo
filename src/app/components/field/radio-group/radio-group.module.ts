import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DssButtonModule } from "@dss/components/button";
import { DssRadioGroupModule } from '@dss/components/radio-group';
import { DssTypographyModule } from '@dss/components/typography';

import { RadioGroupComponent } from './radio-group.component';

const ROUTES: Routes = [
  { path: '', component: RadioGroupComponent },
];

@NgModule({
  declarations: [RadioGroupComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    DssButtonModule,
    DssRadioGroupModule,
    DssTypographyModule,
  ],
  exports: [RadioGroupComponent],
})
export class RadioGroupModule { }
