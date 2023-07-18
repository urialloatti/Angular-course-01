import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { counterModule } from './counter/counter.module';
import { heroesModule } from './heroes/heroes.module';
import { GhibliModule } from './ghibli/ghibli.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    counterModule,
    heroesModule,
    GhibliModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
