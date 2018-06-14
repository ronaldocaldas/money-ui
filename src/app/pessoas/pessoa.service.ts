import { Http, Headers, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';


export class PessoaFiltro {
  nome: string;
  pagina = 0;
  intensPorPagina = 5;
}


@Injectable()
export class PessoaService {

  constructor(private http: Http) { }

  pessoasUrl = 'http://localhost:8080/pessoas';

  pesquisar(filtro: PessoaFiltro): Promise<any> {
    const params = new URLSearchParams();
    const headers = new Headers();

    headers.append('Authorization', 'Basic YWRtaW5AbW9uZXkuY29tOmFkbWlu');

    params.set('page', filtro.pagina.toString());
    params.set('size', filtro.intensPorPagina.toString());

    if (filtro.nome) {
      params.set('nome', filtro.nome);
    }

    return this.http.get(`${this.pessoasUrl}`, { headers, search: params })
      .toPromise()
      .then(response => {
        const responseJson = response.json();
        const pessoas = responseJson.content;
        const resultado = {
          pessoas,
          total: responseJson.totalElements
        };

        return resultado;
      });
  }

  excluir(codigo: number): Promise<void> {
    const headers = new Headers();

    headers.append('Authorization', 'Basic YWRtaW5AbW9uZXkuY29tOmFkbWlu');

    return this.http.delete(`${this.pessoasUrl}/${codigo}`, { headers })
      .toPromise()
      .then(() => null);

  }

  mudarStatus(codigo: number, ativo: boolean): Promise<void> {
    const headers = new Headers();
    const params = new URLSearchParams();

    headers.append('Authorization', 'Basic YWRtaW5AbW9uZXkuY29tOmFkbWlu');
    headers.append('Content-Type', 'application/json');

    params.set('status', ativo ? 'false' : 'true');

    return this.http.put(`${this.pessoasUrl}/${codigo}/ativo`, ativo, { headers })
      .toPromise()
      .then(() => null);
  }

  listarTodas(): Promise<any> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW5AbW9uZXkuY29tOmFkbWlu');

    return this.http.get(`${this.pessoasUrl}`, { headers })
      .toPromise()
      .then(response => response.json().content);
  }
}
