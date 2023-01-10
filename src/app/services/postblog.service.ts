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
}
