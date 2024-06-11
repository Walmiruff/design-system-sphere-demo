import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DssButtonModule } from '@dss/components/button';
import { DssIconModule } from '@dss/components/icon';
import { DssResultStateModule } from '@dss/components/result-state';
import { DssStatusIconModule } from '@dss/components/status-icon';
import { DssTypographyModule } from '@dss/components/typography';

import { ResultStateComponent } from './result-state.component';

const ROUTES: Routes = [{ path: '', component: ResultStateComponent }];

@NgModule({
  declarations: [ResultStateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    DssButtonModule,
    DssIconModule,
    DssResultStateModule,
    DssStatusIconModule,
    DssTypographyModule,
  ],
})
export class ResultStateModule {}
