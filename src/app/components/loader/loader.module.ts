import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { DssAccordionModule } from '@dss/components/accordion';
import { DssButtonModule } from '@dss/components/button';
import { DssLoaderModule } from '@dss/components/loader';
import { DssRadioGroupModule } from '@dss/components/radio-group';
import { DssTypographyModule } from '@dss/components/typography';

import { ContentLoaderComponent } from './content-loader/content-loader.component';
import { LoaderComponent } from './loader.component';
import { BackendService } from './page-loader/backend.service';
import { MockDataService } from './page-loader/mock-data.service';
import { PageLoaderComponent } from './page-loader/page-loader.component';

const ROUTES: Routes = [
  {
    path: '',
    component: LoaderComponent,
    children: [
      { path: 'page-loader', component: PageLoaderComponent },
      { path: 'content-loader', component: ContentLoaderComponent },
    ],
  },
];

@NgModule({
  declarations: [
    LoaderComponent,
    PageLoaderComponent,
    ContentLoaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MockDataService, {
      delay: 3000,
      passThruUnknownUrl: true,
    }),
    FormsModule,
    DssAccordionModule,
    DssButtonModule,
    DssLoaderModule,
    DssTypographyModule,
    DssRadioGroupModule,
  ],
  providers: [
    MockDataService,
    BackendService,
  ],
})
export class LoaderModule {}
