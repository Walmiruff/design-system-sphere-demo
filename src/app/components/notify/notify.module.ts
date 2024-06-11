import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DssButtonModule } from '@dss/components/button';
import { DssIconModule } from '@dss/components/icon';
import { DssNotifyModule } from '@dss/components/notify';
import { DssTypographyModule } from '@dss/components/typography';

import { NotifyComponent } from './notify.component';

const ROUTES: Routes = [{ path: '', component: NotifyComponent }];

@NgModule({
  declarations: [NotifyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    DssNotifyModule,
    DssButtonModule,
    DssTypographyModule,
    DssIconModule,
  ],
})
export class NotifyModule {}
