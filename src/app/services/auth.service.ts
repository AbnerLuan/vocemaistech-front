import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Credenciais } from '../models/credenciais';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioLogado: any;

  jwtService: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient) { }

  authenticate(creds: Credenciais) {
    return this.http.post(`${environment.baseUrl}login`, creds, {
      observe: 'response',
      responseType: 'text'  
    }).pipe(tap( res => {
      this.usuarioLogado = res.headers.get('NameUser'); 
      localStorage.setItem('nameUser', this.usuarioLogado)      
    }))
}

  successfulLogin(authToken: string) {
    localStorage.setItem('token', authToken);        
  }

  isAuthenticated() {
    let token = localStorage.getItem('token')
    if (token != null) {
      return !this.jwtService.isTokenExpired(token)
    }
    return false
  }

  logout() {
    localStorage.clear();
  }
}
