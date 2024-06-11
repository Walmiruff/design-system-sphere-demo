import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DssButtonModule } from '@dss/components/button';
import { DssDownloadModule } from '@dss/components/download';
import { DssIconModule } from '@dss/components/icon';
import { DssTypographyModule } from '@dss/components/typography';

import { DownloadComponent } from './download.component';

const ROUTES: Routes = [
  { path: '', component: DownloadComponent },
];

@NgModule({
  declarations: [DownloadComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    DssDownloadModule,
    DssIconModule,
    DssButtonModule,
    DssTypographyModule,
  ],
})
export class DownloadModule { }
