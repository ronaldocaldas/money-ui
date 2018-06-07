import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {ToastyModule} from 'ng2-toasty';

import { format } from 'util';

import { AppComponent } from './app.component';
import { PessoasModule } from './pessoas/pessoas.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { CoreModule } from './core/core.module';
import { HttpModule } from '@angular/http';
import { LancamentoService } from './lancamentos/lancamento.service';
import { PessoaService } from './pessoas/pessoa.service';
import { AnimationTransitionInstructionType } from '@angular/animations/browser/src/render/animation_engine_instruction';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    LancamentosModule,
    PessoasModule,
    CoreModule,
    HttpModule,
    ToastyModule.forRoot()
    ],
  providers: [LancamentoService, PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
