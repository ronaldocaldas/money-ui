import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  lancamentosUrl = 'http://localhost:8080/lancamentos';


  constructor(private http: Http) { }

  pesquisar(): Promise<any> {
    const headers  = new Headers();
    headers.append('Authorization' , 'Basic YWRtaW5AbW9uZXkuY29tOmFkbWlu');

    return this.http.get(`${this.lancamentosUrl}?resumo`, {headers})
      .toPromise()
      .then(response => response.json().content);
  }
}
