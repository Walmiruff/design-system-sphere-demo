import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DssButtonModule } from '@dss/components/button';
import { DssChatModule, DssMessageComponent, DssEventComponent } from '@dss/components/chat';
import { DssFormFieldModule } from '@dss/components/form-field';
import { DssTypographyModule } from '@dss/components/typography';


import { ChatComponent } from './chat.component';
import { ROUTES_CHILDREN } from './chat.routes';
import { ChatService } from './chat.service';

const ROUTES: Routes = [
  {
    path: '',
    component: ChatComponent,
    children: [
      ...ROUTES_CHILDREN,
    ],
  },
];

@NgModule({
  declarations: [
    ChatComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ROUTES),
    DssButtonModule,
    DssChatModule,
    DssFormFieldModule,
    DssTypographyModule,
  ],
  entryComponents: [
    DssEventComponent,
    DssMessageComponent
  ],
  providers: [
    ChatService,
  ],
})
export class ChatModule { }
