import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DssButtonModule } from '@dss/components/button';
import { DssDropdownModule } from '@dss/components/dropdown';
import { DssFormFieldModule } from '@dss/components/form-field';
import { DssTypographyModule } from '@dss/components/typography';

import { DropdownComponent } from './dropdown.component';

const ROUTES: Routes = [{ path: '', component: DropdownComponent }];

@NgModule({
  declarations: [DropdownComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    FormsModule,
    ReactiveFormsModule,
    DssButtonModule,
    DssFormFieldModule,
    DssDropdownModule,
    DssTypographyModule,
  ],
  exports: [DropdownComponent],
})
export class DropdownModule {}
