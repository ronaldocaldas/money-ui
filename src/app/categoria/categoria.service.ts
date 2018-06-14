import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  categoriaUrl = 'http://localhost:8080/categorias';
  constructor(private http: Http) { }

  listarTodas(): Promise<any> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW5AbW9uZXkuY29tOmFkbWlu');

    return this.http.get(`${this.categoriaUrl}`, { headers })
      .toPromise()
      .then(response => {
        const responseJson = response.json();
      });
  }
}
