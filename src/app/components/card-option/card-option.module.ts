import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DssButtonModule } from '@dss/components/button';
import { DssCardOptionModule } from '@dss/components/card-option';
import { DssTypographyModule } from '@dss/components/typography';

import { CardOptionComponent } from './card-option.component';

const ROUTES: Routes = [
  { path: '', component: CardOptionComponent },
];

@NgModule({
  declarations: [CardOptionComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    DssButtonModule,
    DssCardOptionModule,
    DssTypographyModule,
  ],
})
export class CardOptionModule { }
