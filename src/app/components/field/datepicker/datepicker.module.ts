import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DssButtonModule } from '@dss/components/button';
import { DssDatepickerModule } from '@dss/components/datepicker';
import { DssTypographyModule } from '@dss/components/typography';
import { DssTagModule } from '@dss/components/tag';

import { DatepickerComponent } from './datepicker.component';

const ROUTES: Routes = [{ path: '', component: DatepickerComponent }];

@NgModule({
  declarations: [DatepickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ROUTES),
    DssDatepickerModule,
    DssButtonModule,
    ReactiveFormsModule,
    DssTypographyModule,
    DssTagModule,
  ],
})
export class DatepickerModule {}
