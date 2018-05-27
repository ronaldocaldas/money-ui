import { TabViewModule } from 'primeng/tabview';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule} from 'primeng/components/button/button';
import {DataTableModule} from 'primeng/components/datatable/datatable';


import { AppComponent } from './app.component';
import { format } from 'util';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
