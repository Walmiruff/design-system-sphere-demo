import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DssAccordionModule } from '@dss/components/accordion';
import { DssButtonModule } from '@dss/components/button';
import { DssCheckboxModule } from '@dss/components/checkbox';
import { DssDropdownModule } from '@dss/components/dropdown';
import { DssFormFieldModule } from '@dss/components/form-field';
import { DssOptionButtonModule } from '@dss/components/option-button';
import { DssRadioGroupModule } from '@dss/components/radio-group';
import { DssTypographyModule } from '@dss/components/typography';

import { AccordionComponent } from './accordion.component';

const ROUTES: Routes = [
  { path: '', component: AccordionComponent },
];

@NgModule({
  declarations: [AccordionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    FormsModule,
    DssAccordionModule,
    DssTypographyModule,
    DssButtonModule,
    DssRadioGroupModule,
    DssOptionButtonModule,
    DssCheckboxModule,
    DssDropdownModule,
    DssFormFieldModule,
  ],
  exports: [AccordionComponent],
})
export class AccordionModule { }
