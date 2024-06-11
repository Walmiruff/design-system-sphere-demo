import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DssButtonModule } from '@dss/components/button';
import { DssCarouselModule } from '@dss/components/carousel';
import { DssContainerModule } from '@dss/components/container';
import { DssIconModule } from '@dss/components/icon';
import { DssTypographyModule } from '@dss/components/typography';

import { CarouselComponent } from './carousel.component';

const ROUTES: Routes = [
  { path: '', component: CarouselComponent },
];

@NgModule({
  declarations: [CarouselComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    DssButtonModule,
    DssCarouselModule,
    DssTypographyModule,
    DssIconModule,
    DssContainerModule,
  ],
})
export class CarouselModule { }
