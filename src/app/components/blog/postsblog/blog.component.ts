
import { PostBlog } from '../../../models/postblog';
import { Component, OnInit } from '@angular/core';
import { PostblogService } from '../../../services/postblog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

list: PostBlog[] = [];

constructor(private service: PostblogService) {} 

  ngOnInit(): void {   
    this.findAll();    
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.list = resposta;      
    })    
  }
}