import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DssAccordionModule } from '@dss/components/accordion';
import { DssButtonModule } from '@dss/components/button';
import { DssLoaderModule } from '@dss/components/loader';
import { DssRadioGroupModule } from '@dss/components/radio-group';
import { DssTypographyModule } from '@dss/components/typography';

import { ContentLoaderComponent } from './content-loader/content-loader.component';
import { LoaderComponent } from './loader.component';


@NgModule({
  declarations: [
    LoaderComponent,
    ContentLoaderComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    DssAccordionModule,
    DssButtonModule,
    DssLoaderModule,
    DssTypographyModule,
    DssRadioGroupModule,
  ],
  providers: [],
})
export class LoaderModule {}
