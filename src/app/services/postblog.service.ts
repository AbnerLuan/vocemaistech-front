import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { PostBlog } from '../models/postblog';

@Injectable({
  providedIn: 'root'
})
export class PostblogService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAll(): Observable<PostBlog[]> {
    return this.http.get<PostBlog[]>(`${environment.baseUrl}postsblog`);
  }

  create(postblog: PostBlog): Observable<PostBlog> {
    return this.http.post<PostBlog>(`${environment.baseUrl}postsblog`, postblog);
  }

  findById(id: any): Observable<PostBlog> {
    return this.http.get<PostBlog>(`${environment.baseUrl}postsblog/${id}`);
  }

  salvaImagem(formData: any): Observable<any> {
    return this.http.post(`${environment.baseUrl}files/upload`, formData);
  }

  update(postBlog: PostBlog): Observable<PostBlog> {
    return this.http.put<PostBlog>(`${environment.baseUrl}postsblog/${postBlog.id}`, postBlog);
  }

  findByCategory(categoryPost: string): Observable<PostBlog[]> {
    return this.http.get<PostBlog[]>(`${environment.baseUrl}postsblog/categoryPost/${categoryPost}`);
  }
}
