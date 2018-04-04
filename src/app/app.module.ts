import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { Hero } from './hero/hero';
import { HeroService } from './hero.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,HeroComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
