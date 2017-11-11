import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlotComponent, PlotService } from './plot';

@NgModule({
  declarations: [
    AppComponent,
    PlotComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    AppRoutingModule
  ],
  providers: [
    PlotService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
