import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DssAvatarModule } from '@dss/components/avatar';
import { DssButtonModule } from '@dss/components/button';
import { DssChatModule } from '@dss/components/chat';
import { DssIconModule } from '@dss/components/icon';
import { DssTypographyModule } from '@dss/components/typography';

import { MessageComponent } from './message.component';

const ROUTES: Routes = [
  { path: '', component: MessageComponent },
];

@NgModule({
  declarations: [MessageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    DssAvatarModule,
    DssButtonModule,
    DssChatModule,
    DssIconModule,
    DssTypographyModule,
  ],
  exports: [MessageComponent],
})
export class MessageModule { }
