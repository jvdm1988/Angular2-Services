import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MyCounterComponent } from './my-counter/my-counter.component';
import { MyCounter2Component } from './my-counter-2/my-counter-2.component';
import { CounterService } from './counter.service';
import { JokesService } from './jokes.service';
import { JokesComponent } from './jokes/jokes.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    MyCounter2Component,
    JokesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  // we are not including our jokes service in this providers array
  // beacause we are leaving that service as a multiple instance service.
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
