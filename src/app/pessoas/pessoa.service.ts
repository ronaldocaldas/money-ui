import { Http, Headers , URLSearchParams} from '@angular/http';
import { Injectable } from '@angular/core';


export interface PessoaFiltro {
  nome: string;
}


@Injectable()
export class PessoaService {

  constructor(private http: Http) { }

  pessoasUrl = 'http://localhost:8080/pessoas';

  pesquisar(filtro: PessoaFiltro): Promise<any> {
    const params = new URLSearchParams();
    const headers = new Headers();

    headers.append('Authorization', 'Basic YWRtaW5AbW9uZXkuY29tOmFkbWlu');

    if (filtro.nome) {
      params.set('nome', filtro.nome);
    }

    return this.http.get(`${this.pessoasUrl}`, { headers, search: params})
      .toPromise()
      .then(response =>
        response.json().content);
  }
}
