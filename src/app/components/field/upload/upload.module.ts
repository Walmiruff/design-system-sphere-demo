import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DssTypographyModule } from '@dss/components/typography';
import { DssUploadModule } from '@dss/components/upload';
import { DssListModule } from '@dss/components/list';
import { DssIconModule } from '@dss/components/icon';
import { DssButtonModule } from '@dss/components/button';

import { UploadComponent } from './upload.component';

const ROUTES: Routes = [{ path: '', component: UploadComponent }];

@NgModule({
  declarations: [UploadComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    DssUploadModule,
    DssTypographyModule,
    DssListModule,
    DssIconModule,
    DssButtonModule,
  ],
  exports: [UploadComponent],
})
export class UploadModule {}
