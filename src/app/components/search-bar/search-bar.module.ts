import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DssHeaderModule } from '@dss/components/header';
import { DssIconModule } from '@dss/components/icon';
import { DssListModule } from '@dss/components/list';
import { DssSearchBarModule } from '@dss/components/search-bar';
import { DssTypographyModule } from '@dss/components/typography';

import { SearchBarComponent } from './search-bar.component';

const ROUTES: Routes = [{ path: '', component: SearchBarComponent }];

@NgModule({
  declarations: [SearchBarComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ROUTES),
    DssSearchBarModule,
    DssTypographyModule,
    DssIconModule,
    DssListModule,
    DssHeaderModule,
  ],
})
export class SearchBarModule {}
