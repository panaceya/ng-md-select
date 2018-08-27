import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {MaterialModule} from './material.module';
import {PlayerService} from './../services/player.service';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, ReactiveFormsModule, MaterialModule, HttpClientModule],
  declarations: [AppComponent],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
