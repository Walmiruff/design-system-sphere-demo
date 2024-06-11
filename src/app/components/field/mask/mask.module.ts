import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DssButtonModule } from '@dss/components/button';
import { DssFormFieldModule } from '@dss/components/form-field';
import { DssMaskModule } from '@dss/components/mask';
import { DssTypographyModule } from '@dss/components/typography';

import { MaskComponent } from './mask.component';

const ROUTES: Routes = [{ path: '', component: MaskComponent }];

@NgModule({
  declarations: [MaskComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    DssFormFieldModule,
    DssButtonModule,
    DssTypographyModule,
    DssMaskModule,
  ],
  exports: [MaskComponent],
})
export class MaskModule {}
