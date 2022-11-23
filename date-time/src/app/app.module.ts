import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatetimeComponent } from './datetime/datetime.component';
import { DigitalClockComponent } from './digital-clock/digital-clock.component';

@NgModule({
  declarations: [
    AppComponent,
    DatetimeComponent,
    DigitalClockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
