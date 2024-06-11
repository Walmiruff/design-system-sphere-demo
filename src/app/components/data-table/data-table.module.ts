import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DssCheckboxModule } from '@dss/components/checkbox';
import { DssDataTableModule } from '@dss/components/data-table';
import { DssRadioGroupModule } from '@dss/components/radio-group';
import { DssTypographyModule } from '@dss/components/typography';

import { DataTableActionsComponent } from './actions/data-table.component';
import { DataTableColumnFilterComponent } from './column-filter/data-table.component';
import { DataTableComponent } from './data-table.component';
import { DataTableDefaultComponent } from './default/data-table.component';
import { DataTableFixedComponent } from './fixed/data-table.component';
import { DataTableWithCheckboxComponent } from './with-checkbox/data-table-directive.component';
import { DataTableWithCheckboxAndServiceComponent } from './with-checkbox/data-table-service.component';
import { DataTableWithRadioComponent } from './with-radio/data-table-directive.component';

const ROUTES: Routes = [
  {
    path: '',
    component: DataTableComponent,
    children: [
      { path: 'default', component: DataTableDefaultComponent },
      { path: 'with-checkbox-service', component: DataTableWithCheckboxAndServiceComponent },
      { path: 'with-checkbox-directive', component: DataTableWithCheckboxComponent },
      { path: 'with-radio-directive', component: DataTableWithRadioComponent },
      { path: 'actions', component: DataTableActionsComponent },
      { path: 'fixed', component: DataTableFixedComponent },
      { path: 'column-filter', component: DataTableColumnFilterComponent },
    ],
  },
];

@NgModule({
  declarations: [
    DataTableComponent,
    DataTableActionsComponent,
    DataTableDefaultComponent,
    DataTableFixedComponent,
    DataTableWithCheckboxAndServiceComponent,
    DataTableWithCheckboxComponent,
    DataTableWithRadioComponent,
    DataTableColumnFilterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ROUTES),
    DssDataTableModule,
    DssCheckboxModule,
    DssRadioGroupModule,
    DssTypographyModule,
  ],
})
export class DataTableModule {}
