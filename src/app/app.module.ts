import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NotifierModule } from 'angular-notifier';
import { AppComponent } from './app.component';
import { PeoplesComponent } from './components/peoples/peoples.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PeoplesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NotifierModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
