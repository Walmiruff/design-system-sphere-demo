import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DssDividerModule } from '@dss/components/divider';
import { DssHeaderModule } from '@dss/components/header';
import { DssIconModule } from '@dss/components/icon';
import { DssMenuModule } from '@dss/components/menu';
import { DssTypographyModule } from '@dss/components/typography';

import { MenuComponent } from './menu.component';
import { LoansComponent } from './loans/loans.component';
import { InvestmentsComponent } from './investments/investments.component';

const ROUTES: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      { path: 'investments', component: InvestmentsComponent },
      { path: 'loans', component: LoansComponent },
    ],
  },
];

@NgModule({
  declarations: [
    MenuComponent,
    LoansComponent,
    InvestmentsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    DssDividerModule,
    DssIconModule,
    DssMenuModule,
    DssTypographyModule,
    DssHeaderModule,
  ],
})
export class MenuModule {}
