import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';

export interface LancamentoFiltro {
  descricao: string;
}
@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  lancamentosUrl = 'http://localhost:8080/lancamentos';


  constructor(private http: Http) { }

  pesquisar(filtro: LancamentoFiltro): Promise<any> {
    const params = new URLSearchParams;
    const headers = new Headers();

    headers.append('Authorization', 'Basic YWRtaW5AbW9uZXkuY29tOmFkbWlu');

    if (filtro.descricao) {
      params.set('descricao', filtro.descricao);
    }
    return this.http.get(`${this.lancamentosUrl}?resumo`, { headers, search: params })
      .toPromise()
      .then(response => response.json().content);
  }
}
