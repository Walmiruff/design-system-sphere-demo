import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DssChatModule } from '@dss/components/chat';
import { DssTypographyModule } from '@dss/components/typography';

import { QuickReplyComponent } from './quick-reply.component';

const ROUTES: Routes = [
  { path: '', component: QuickReplyComponent },
];

@NgModule({
  declarations: [QuickReplyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    DssChatModule,
    DssTypographyModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [QuickReplyComponent],
})
export class QuickReplyModule { }
