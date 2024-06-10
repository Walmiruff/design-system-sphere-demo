import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { DssI18nModule } from '@dss/components/i18n';
import { DssDropdownModule } from '@dss/components/dropdown';
import { DssFormFieldModule } from '@dss/components/form-field';
import { DssIconModule } from '@dss/components/icon';
import { DssToggleModule } from '@dss/components/toggle';
import { DssTypographyModule } from '@dss/components/typography';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DssI18nModule.forRoot({ language: 'pt-BR' }),
    DssIconModule,
    DssToggleModule,
    DssTypographyModule,
    DssFormFieldModule,
    DssDropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
