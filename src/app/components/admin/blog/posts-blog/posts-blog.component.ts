import { Component } from '@angular/core';
import { PostBlog } from '../../../../models/postblog';
import { OnInit, } from '@angular/core';
import { PostblogService } from '../../../../services/postblog.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-posts-blog',
  templateUrl: './posts-blog.component.html',
  styleUrls: ['./posts-blog.component.css']
})
export class PostsBlogComponent implements OnInit {

  list: PostBlog[] = [];  
  categoryPost = '';

  constructor(private service: PostblogService,
    private toast: ToastrService,) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.list = resposta;      
    })
  }

  delete(id: any): void {
    const confirmacao = confirm("Quer realmente deletar essa postagem?");
    if (confirmacao) {
      this.service.delete(id).subscribe((resposta) => {
        if (resposta === null) {
          this.findAll();
          this.toast.info('Postagem Deletada com Sucesso!');
        }
      })
    };
  }
}