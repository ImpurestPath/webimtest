import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import {OAuthModule } from 'angular-oauth2-oidc';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    OAuthModule.forRoot(
      // {
      // resourceServer: {
      //     allowedUrls: ['https://api.vk.com'],
      //     sendAccessToken: true
      // }}
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
