import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DssDividerModule } from '@dss/components/divider';
import { DssPageMenuModule } from '@dss/components/page-menu';
import { DssTypographyModule } from '@dss/components/typography';

import { PageMenuComponent } from './page-menu.component';

const ROUTES: Routes = [
  { path: '', component: PageMenuComponent },
];

@NgModule({
  declarations: [PageMenuComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ROUTES),
    DssDividerModule,
    DssPageMenuModule,
    DssTypographyModule,
  ],
})
export class PageMenuModule { }
