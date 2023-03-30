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

  findAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${environment.baseUrl}users`);
  }

  findById(id: any): Observable<Usuario> {
    return this.http.get<Usuario>(`${environment.baseUrl}users/${id}`);
  }

  findByEmail(email: any): Observable<Usuario> {
    return this.http.get<Usuario>(`${environment.baseUrl}users/email/${email}`);
  }

  create(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${environment.baseUrl}users`, usuario);
  }

  update(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${environment.baseUrl}users/${usuario.id}`, usuario);
  }

  delete(id: any): Observable<void> {
    const url = `${environment.baseUrl}users/${id}`;
    return this.http.delete<void>(url);
  }
}
