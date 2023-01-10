import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environments';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor(private http: HttpClient) { }

  create(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${environment.baseUrl}students`, usuario);
  }

  findByEmail(email: any): Observable<Usuario> {
    return this.http.get<Usuario>(`${environment.baseUrl}students/email/${email}`);
  }

  update(usuario: Usuario): Observable<Usuario> {
    usuario.profile = ['3']
    return this.http.put<Usuario>(`${environment.baseUrl}students/${usuario.id}`, usuario);
  }
}
