import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DssButtonModule } from '@dss/components/button';
import { DssProductCardModule } from '@dss/components/product-card';
import { DssTypographyModule } from '@dss/components/typography';

import { ProductCardComponent } from './product-card.component';

const ROUTES: Routes = [
  { path: '', component: ProductCardComponent },
];

@NgModule({
  declarations: [ProductCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    DssProductCardModule,
    DssButtonModule,
    DssTypographyModule,
  ],
})
export class ProductCardModule { }
