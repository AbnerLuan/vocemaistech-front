import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environments';
import { Credenciais } from '../models/credenciais';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtService: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient) { }

  authenticate(creds: Credenciais) {
    return this.http.post(`${environment.urlLogin}login`, creds, {
      observe: 'response',
      responseType: 'text'
    })
  }

  successfulLogin(authToken: string) {
    localStorage.setItem('token', authToken);
    localStorage.setItem('nameUser', this.decodePayloadJWT().name);
    localStorage.setItem('ROLES_USER', this.decodePayloadJWT().role);
  }

  isAuthenticated() {
    let token = localStorage.getItem('token')
    if (token != null) {
      return !this.jwtService.isTokenExpired(token)
    }
    return false
  }

  public decodePayloadJWT(): any {
    try {
      return jwt_decode(localStorage.getItem('token'));
    } catch (Error) {
      return null;
    }
  }

  logout() {
    localStorage.clear();
  }
}

