import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './view/header/header.component';
import { MainComponent } from './view/main/main.component';
import { Part1Component } from './view/part1/part1.component';
import { Part2Component } from './view/part2/part2.component';
import { Part3Component } from './view/part3/part3.component';
import { Part4Component } from './view/part4/part4.component';
import { Part5Component } from './view/part5/part5.component';
import { Part6Component } from './view/part6/part6.component';
import { Part7Component } from './view/part7/part7.component';
import { Part8Component } from './view/part8/part8.component';
import { FooterComponent } from './view/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    Part1Component,
    Part2Component,
    Part3Component,
    Part4Component,
    Part5Component,
    Part6Component,
    Part7Component,
    Part8Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
