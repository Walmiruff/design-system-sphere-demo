import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DssButtonModule } from '@dss/components/button';
import { DssCountdownModule } from '@dss/components/countdown';
import { DssTypographyModule } from '@dss/components/typography';

import { CountdownComponent } from './countdown.component';

const ROUTES: Routes = [
  { path: '', component: CountdownComponent },
];

@NgModule({
  declarations: [CountdownComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ROUTES),
    DssButtonModule,
    DssCountdownModule,
    DssTypographyModule,
  ],
})
export class CountdownModule { }
