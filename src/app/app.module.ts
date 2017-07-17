import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MyCounterComponent } from './my-counter/my-counter.component';
import { MyCounter2Component } from './my-counter-2/my-counter-2.component';
import { CounterService } from './counter.service';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    MyCounter2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
