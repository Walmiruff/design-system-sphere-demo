import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DssFormFieldModule } from '@dss/components/form-field';
import { DssIconModule } from '@dss/components/icon';
import { DssTypographyModule } from '@dss/components/typography';

import { IconComponent } from './icon.component';

const ROUTES: Routes = [{ path: '', component: IconComponent }];

@NgModule({
  declarations: [IconComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    FormsModule,
    DssFormFieldModule,
    DssIconModule,
    DssTypographyModule,
  ],
})
export class IconModule {}
