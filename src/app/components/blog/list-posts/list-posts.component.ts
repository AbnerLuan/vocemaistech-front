import { PostBlog } from '../../../models/postblog';
import { Component, OnInit, } from '@angular/core';
import { PostblogService } from '../../../services/postblog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {

  list: PostBlog[] = [];
  listrenderizada: PostBlog[] = [];
  categoryPost = '';

  constructor(private service: PostblogService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.list = resposta;
      this.listrenderizada = resposta;
    })
  }

  filtroProgramacao() {
    this.categoryPost = 'PROGRAMACAO';
    const filtrando = this.list.filter(p => p.categoryPost.includes(this.categoryPost));
    this.listrenderizada = filtrando;
  }

  filtroSocialMedia() {
    this.categoryPost = 'SOCIALMEDIA';
    const filtrando = this.list.filter(p => p.categoryPost.includes(this.categoryPost));
    this.listrenderizada = filtrando;
  }

  filtroUtilidades() {
    this.categoryPost = 'UTILIDADES';
    const filtrando = this.list.filter(p => p.categoryPost.includes(this.categoryPost));
    this.listrenderizada = filtrando;
  }

  findCategory(): void {
    console.log(this.categoryPost);
    this.service.findByCategory(this.categoryPost).subscribe((resposta) => {
      this.list = resposta;
    })
  }
}
