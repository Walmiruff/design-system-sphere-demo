import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DssLogoModule } from '@dss/components/logo';
import { DssTypographyModule } from '@dss/components/typography';

import { LogoComponent } from './logo.component';

const ROUTES: Routes = [{ path: '', component: LogoComponent }];

@NgModule({
  declarations: [LogoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    DssLogoModule,
    DssTypographyModule,
  ],
})
export class LogoModule {}
