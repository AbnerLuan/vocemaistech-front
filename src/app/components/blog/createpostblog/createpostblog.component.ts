import { ToastrService } from 'ngx-toastr';
import { PostblogService } from './../../../services/postblog.service';
import { PostBlog } from './../../../models/postblog';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createpostblog',
  templateUrl: './createpostblog.component.html',
  styleUrls: ['./createpostblog.component.css']
})
export class CreatepostblogComponent implements OnInit {

  postBlog: PostBlog = {
    title: '',
    author: '',
    text: '',
    categoryPost: '',
    subCategory: '',
    creator: '2',
  }

  title = new FormControl(null, Validators.minLength(10));
  category = new FormControl(null, Validators.minLength(3));
  subcategory = new FormControl(null, Validators.minLength(11));
  text = new FormControl(null, Validators.minLength(5));


  constructor(private postblogService: PostblogService,
    private router: Router,
    private toast: ToastrService) { }

  ngOnInit(): void {
    this.postBlog.author = localStorage.getItem('nameUser').split(' ')[0];
  }

  validaCampos(): boolean {
    return this.title.valid && this.category.valid && this.subcategory.valid && this.text.valid;
  }

  create(): void {
    this.postblogService.create(this.postBlog).subscribe(() => {
      this.toast.success('Postagem criada com sucesso', 'Parabéns!');
      this.router.navigate(['blog'])
    }, ex => {
      this.toast.error('Preencha todos os campos obrigatórios *', 'Campo Obrigatório (*)')
    })
  }
}