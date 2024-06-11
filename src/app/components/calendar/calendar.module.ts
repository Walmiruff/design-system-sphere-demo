import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DssCalendarModule } from '@dss/components/calendar';
import { DssTypographyModule } from '@dss/components/typography';

import { CalendarComponent } from './calendar.component';

const ROUTES: Routes = [{ path: '', component: CalendarComponent }];

@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ROUTES),
    DssCalendarModule,
    DssTypographyModule,
  ],
})
export class CalendarModule {}
