import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { AppRoutingModule } from './app-routing.module';
import { ProvinceListComponent } from './province-list/province-list.component';
import { CommonUseModule } from './common-use/common-use.module';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    ProvinceListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonUseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
