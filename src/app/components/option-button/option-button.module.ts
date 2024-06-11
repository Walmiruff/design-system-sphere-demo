import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DssButtonModule } from '@dss/components/button';
import { DssCheckboxModule } from '@dss/components/checkbox';
import { DssDividerModule } from '@dss/components/divider';
import { DssOptionButtonModule } from '@dss/components/option-button';
import { DssRadioGroupModule } from '@dss/components/radio-group';
import { DssTypographyModule } from '@dss/components/typography';

import { OptionButtonComponent } from './option-button.component';

const ROUTES: Routes = [
  { path: '', component: OptionButtonComponent },
];

@NgModule({
  declarations: [OptionButtonComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    FormsModule,
    DssButtonModule,
    DssCheckboxModule,
    DssDividerModule,
    DssOptionButtonModule,
    DssRadioGroupModule,
    DssTypographyModule,
  ],
  exports: [OptionButtonComponent],
})
export class OptionButtonModule { }
