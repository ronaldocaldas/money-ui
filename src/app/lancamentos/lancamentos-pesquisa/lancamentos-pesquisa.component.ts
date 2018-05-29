import { DataTableModule } from 'primeng/components/datatable/datatable';
import { LancamentoService, LancamentoFiltro } from './../lancamento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {
  lancamentos = [];
  descricao: string;
  dataVencimentoInicio: Date;
  dataVencimentoFim: Date;

  constructor(private lancamentoService: LancamentoService) { }

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar() {
    const filtro: LancamentoFiltro = {
      descricao: this.descricao,
      dataVencimentoInicio: this.dataVencimentoInicio,
      dataVencimentoFim: this.dataVencimentoFim
    };
    this.lancamentoService.pesquisar(filtro)
      .then(lancamentos => this.lancamentos = lancamentos);

  }
}
