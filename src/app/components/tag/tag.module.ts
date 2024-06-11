import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DssButtonModule } from '@dss/components/button';
import { DssFormFieldModule } from '@dss/components/form-field';
import { DssTagModule } from '@dss/components/tag';
import { DssTypographyModule } from '@dss/components/typography';

import { TagComponent } from './tag.component';

const ROUTES: Routes = [
  { path: '', component: TagComponent },
];

@NgModule({
  declarations: [TagComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    DssTagModule,
    DssTypographyModule,
    DssFormFieldModule,
    DssButtonModule,
  ],
})
export class TagModule { }
