import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    PagesModule,
    StoreModule.forRoot({}),
  ],
  providers: [{ provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
