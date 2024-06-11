import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DssButtonModule } from '@dss/components/button';
import { DssCardModule } from '@dss/components/card';
import { DssTypographyModule } from '@dss/components/typography';

import { CardComponent } from './card.component';

const ROUTES: Routes = [
  { path: '', component: CardComponent },
];

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    DssCardModule,
    DssButtonModule,
    DssTypographyModule,
  ],
})
export class CardModule { }
