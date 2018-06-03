import { PessoaService, PessoaFiltro } from './../pessoa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent implements OnInit {

  nome: string;
  pessoas = [];

  ngOnInit(): void {
    this.pesquisar();
  }
  constructor(private pessoasService: PessoaService) { }

  pesquisar() {
    return this.pessoasService.pesquisar({ nome: this.nome })
      .then(pessoas => this.pessoas = pessoas);
  }
}
