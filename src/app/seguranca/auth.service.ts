import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  ouathTokenUrl = 'http://localhost:8080/oauth/token';
  jwtPeyLoad: any;

  constructor(private http: Http,
    private jwtHelper: JwtHelper
  ) {
    this.carregarToken();
  }

  login(usuario: string, senha: string): Promise<void> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');

    const body = `username=${usuario}&password=${senha}&grant_type=password`;
    return this.http.post(this.ouathTokenUrl, body, { headers })
      .toPromise()
      .then(response => {
        console.log(response);
        this.armazenarToken(response.json().access_token);

      })
      .catch(response => {
        console.log(response);
      });
  }

  private armazenarToken(token: string) {
    this.jwtPeyLoad = this.jwtHelper.decodeToken(token);
    // armazena no localstorage no navegador do usuário
    localStorage.setItem('token', token);
  }

  private carregarToken() {
    const token = localStorage.getItem('token');
    if (token) {
      this.armazenarToken(token);
    }
  }
}
