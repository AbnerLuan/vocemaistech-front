import { PostblogService } from './../../../services/postblog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PostBlog } from './../../../models/postblog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postBlog: PostBlog = {
    id: '',
    title: '',
    nameAuthor: '',
    date: '',
    text: '',
    categoryPost: '',
    subCategory: '',
  }

  constructor(private router: Router,
    private route: ActivatedRoute,
    private postBlogService: PostblogService) { }

  ngOnInit(): void {
    this.postBlog.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.postBlogService.findById(this.postBlog.id).subscribe(resposta => {
      this.postBlog = resposta;
    });
  }
}
