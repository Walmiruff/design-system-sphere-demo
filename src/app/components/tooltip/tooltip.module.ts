import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DssButtonModule } from '@dss/components/button';
import { DssFormFieldModule } from '@dss/components/form-field';
import { DssIconModule } from '@dss/components/icon';
import { DssTooltipModule } from '@dss/components/tooltip';
import { DssTypographyModule } from '@dss/components/typography';

import { TooltipComponent } from './tooltip.component';

const ROUTES: Routes = [{ path: '', component: TooltipComponent }];

@NgModule({
  declarations: [TooltipComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ROUTES),
    DssTooltipModule,
    DssButtonModule,
    DssFormFieldModule,
    DssIconModule,
    DssTypographyModule,
  ],
})
export class TooltipModule {}
