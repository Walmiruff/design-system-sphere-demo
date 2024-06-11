import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DssDropdownModule } from '@dss/components/dropdown';
import { DssFormFieldModule } from '@dss/components/form-field';
import { DssIconModule } from '@dss/components/icon';
import { DssToggleModule } from '@dss/components/toggle';
import { DssTypographyModule } from '@dss/components/typography';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    DssIconModule,
    DssToggleModule,
    DssTypographyModule,
    DssFormFieldModule,
    DssDropdownModule,
  ],
})
export class HomeModule { }
