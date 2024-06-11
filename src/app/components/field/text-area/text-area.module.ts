import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DssButtonModule } from '@dss/components/button';
import { DssFormFieldModule } from '@dss/components/form-field';
import { DssTypographyModule } from '@dss/components/typography';

import { TextAreaComponent } from './text-area.component';

const ROUTES: Routes = [
  { path: '', component: TextAreaComponent },
];

@NgModule({
  declarations: [TextAreaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    DssFormFieldModule,
    DssButtonModule,
    DssTypographyModule,
  ],
  exports: [TextAreaComponent],
})
export class TextAreaModule { }
