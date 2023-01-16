import { Component, OnInit } from '@angular/core';
import { PostBlog } from 'src/app/models/postblog';
import { PostblogService } from '../../../services/postblog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {
  

  list: PostBlog[] = [];

  constructor(private service: PostblogService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.list = resposta;
    })
  }
}
