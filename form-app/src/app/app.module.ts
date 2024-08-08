// src/app/app.module.ts
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module';
// import {AppComponent} from './app.component';
import {FormComponent} from './form/form.component';
import {SuccessComponent} from './success/success.component';
import {NgxSemanticModule} from 'ngx-semantic';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    NgxSemanticModule,
    ToastrModule.forRoot(), // ToastrModule added
    BrowserAnimationsModule,
    SuccessComponent,
    FormComponent,
    // AppComponent,
    // required animations module
  ],
  providers: []
})
export class AppModule { }

