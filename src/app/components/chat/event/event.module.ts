import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DssButtonModule } from '@dss/components/button';
import { DssChatModule } from '@dss/components/chat';
import { DssIconModule } from '@dss/components/icon';
import { DssTypographyModule } from '@dss/components/typography';

import { EventComponent } from './event.component';

const ROUTES: Routes = [
  { path: '', component: EventComponent },
];

@NgModule({
  declarations: [EventComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    DssButtonModule,
    DssChatModule,
    DssIconModule,
    DssTypographyModule,
  ],
  exports: [EventComponent],
})
export class EventModule { }
