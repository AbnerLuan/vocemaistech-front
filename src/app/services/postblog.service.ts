import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { PostBlog } from '../models/postblog';

@Injectable({
  providedIn: 'root'
})
export class PostblogService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<PostBlog[]> {
    return this.http.get<PostBlog[]>(`${environment.baseUrl}postsblog`);
  }

  findById(id: any): Observable<PostBlog> {
    return this.http.get<PostBlog>(`${environment.baseUrl}postsblog/${id}`);
  }

  findByCategory(categoryPost: string): Observable<PostBlog[]> {
    return this.http.get<PostBlog[]>(`${environment.baseUrl}postsblog/categoryPost/${categoryPost}`);
  }

  create(postblog: PostBlog): Observable<PostBlog> {
    return this.http.post<PostBlog>(`${environment.baseUrl}postsblog`, postblog);
  }

  update(postBlog: PostBlog): Observable<PostBlog> {
    return this.http.put<PostBlog>(`${environment.baseUrl}postsblog/${postBlog.id}`, postBlog);
  }

  delete(id: any): Observable<void> {
    const url = `${environment.baseUrl}postsblog/${id}`;
    return this.http.delete<void>(url);
  }

  salvaImagem(formData: any): Observable<any> {
    return this.http.post(`${environment.baseUrl}files/upload`, formData);
  }

  deleteImage(imageName: any): Observable<void> {
    const url = `${environment.baseUrl}files/delete/${imageName}`;
    return this.http.delete<void>(url);
  }
}


