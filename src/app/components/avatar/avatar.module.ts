import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DssAvatarModule } from '@dss/components/avatar';
import { DssIconModule } from '@dss/components/icon';
import { DssTypographyModule } from '@dss/components/typography';

import { AvatarComponent } from './avatar.component';

const ROUTES: Routes = [
  { path: '', component: AvatarComponent },
];

@NgModule({
  declarations: [AvatarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    DssAvatarModule,
    DssIconModule,
    DssTypographyModule,
  ],
})
export class AvatarModule { }
