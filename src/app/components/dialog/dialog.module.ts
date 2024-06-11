import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DssButtonModule } from '@dss/components/button';
import { DssDialogModule } from '@dss/components/dialog';
import { DssTypographyModule } from '@dss/components/typography';

import { DialogComponent } from './dialog.component';

const ROUTES: Routes = [
  { path: '', component: DialogComponent },
];

@NgModule({
  declarations: [DialogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    DssDialogModule,
    DssButtonModule,
    DssTypographyModule,
  ],
})
export class DialogModule { }
