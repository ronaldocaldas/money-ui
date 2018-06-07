import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { format } from 'util';

import { AppComponent } from './app.component';
import { PessoasModule } from './pessoas/pessoas.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { CoreModule } from './core/core.module';
import { HttpModule } from '@angular/http';
import { AnimationTransitionInstructionType } from '@angular/animations/browser/src/render/animation_engine_instruction';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LancamentosModule,
    PessoasModule,
    CoreModule,
    HttpModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
