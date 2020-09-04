import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CoreModule } from '../core/core.module';
import { ModalExampleModule } from '../modules/modal-example/modal-example.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ModalExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
