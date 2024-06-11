import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DssToggleModule } from '@dss/components/toggle';
import { DssTypographyModule } from '@dss/components/typography';

import { ToggleComponent } from './toggle.component';

const ROUTES: Routes = [{ path: '', component: ToggleComponent }];

@NgModule({
  declarations: [ToggleComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ROUTES),
    DssToggleModule,
    DssTypographyModule,
  ],
  exports: [ToggleComponent],
})
export class ToggleModule {}
