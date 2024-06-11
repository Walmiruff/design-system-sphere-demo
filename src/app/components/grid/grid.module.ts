import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DssTypographyModule } from '@dss/components/typography';

import { GridComponent } from './grid.component';

const ROUTES: Routes = [
  { path: '', component: GridComponent },
];

@NgModule({
  declarations: [GridComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    DssTypographyModule,
  ],
})
export class GridModule { }
