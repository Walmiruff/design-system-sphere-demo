import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DssChatModule } from '@dss/components/chat';
import { DssFormFieldModule } from '@dss/components/form-field';
import { DssIconModule } from '@dss/components/icon';
import { DssTypographyModule } from '@dss/components/typography';

import { ChatContainerComponent } from './chat-container.component';

const ROUTES: Routes = [
  { path: '', component: ChatContainerComponent },
];

@NgModule({
  declarations: [ChatContainerComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ROUTES),
    DssChatModule,
    DssFormFieldModule,
    DssIconModule,
    DssTypographyModule,
  ],
  exports: [ChatContainerComponent],
})
export class ChatContainerModule { }
