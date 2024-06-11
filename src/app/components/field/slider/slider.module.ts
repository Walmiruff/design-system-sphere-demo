import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DssButtonModule } from '@dss/components/button';
import { DssSliderModule } from '@dss/components/slider';
import { DssTypographyModule } from '@dss/components/typography';

import { SliderComponent } from './slider.component';

const ROUTES: Routes = [
  { path: '', component: SliderComponent },
];

@NgModule({
  declarations: [SliderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    FormsModule,
    ReactiveFormsModule,
    DssSliderModule,
    DssTypographyModule,
    DssButtonModule,
  ],
})
export class SliderModule { }
