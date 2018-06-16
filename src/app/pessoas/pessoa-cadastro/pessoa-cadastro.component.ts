import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToastyService } from 'ng2-toasty';

import { PessoaService } from './../pessoa.service';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { Pessoa } from '../../core/model';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {

  constructor(
    private pessoaService: PessoaService,
    private toastyService: ToastyService,
    private errorHandler: ErrorHandlerService) { }

  pessoa = new Pessoa();

  ngOnInit() {
  }

  salvar(form: FormControl) {
    this.pessoaService.adicionar(this.pessoa)
    .then(() => {
      this.toastyService.success('Pessoa adicionada com sucesso!');
      form.reset();
      this.pessoa = new Pessoa();
    })
    .catch(erro  => this.errorHandler.handler(erro));
  }
}
