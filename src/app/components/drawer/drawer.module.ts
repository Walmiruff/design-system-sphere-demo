import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DssButtonModule } from '@dss/components/button';
import { DssDrawerModule } from '@dss/components/drawer';
import { DssTypographyModule } from '@dss/components/typography';

import { DrawerAsideComponent } from './aside/drawer.component';
import { DrawerDefaultComponent } from './default/drawer.component';
import { DrawerComponent } from './drawer.component';

const ROUTES: Routes = [
  {
    path: '',
    component: DrawerComponent,
    children: [
      { path: 'default', component: DrawerDefaultComponent },
      { path: 'aside', component: DrawerAsideComponent },
    ],
  },
];

@NgModule({
  declarations: [
    DrawerComponent,
    DrawerDefaultComponent,
    DrawerAsideComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    DssDrawerModule,
    DssButtonModule,
    DssTypographyModule,
  ],
})
export class DrawerModule { }
