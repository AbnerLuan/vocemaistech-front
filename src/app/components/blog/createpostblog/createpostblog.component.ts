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

  file = '';
  exibirSalvar = false;

  postBlog: PostBlog = {
    id: 0,
    title: '',
    nameAuthor: '',
    author: localStorage.getItem('idUser'),
    text: '',
    categoryPost: '',
    subCategory: '',
    imagePost: 'https://s3.amazonaws.com/www.vocemaistech.com.br/assets/img/new-post-banner.jpg'
  }

  title = new FormControl(null, Validators.minLength(10));
  category = new FormControl(null, Validators.minLength(3));
  subcategory = new FormControl(null, Validators.minLength(11));
  text = new FormControl(null, Validators.minLength(5));


  constructor(private postblogService: PostblogService,
    private router: Router,
    private toast: ToastrService,
  ) { }

  ngOnInit(): void {
    this.postBlog.nameAuthor = localStorage.getItem('nameUser').split(' ')[0];
  }

  validaCampos(): boolean {
    return this.title.valid && this.category.valid && this.subcategory.valid && this.text.valid;
  }

  create(): void {
    this.postblogService.create(this.postBlog).subscribe((resposta) => {
      this.postBlog = resposta;
      this.openPopup();
    }, ex => {
      this.toast.error('Preencha todos os campos obrigatórios *', 'Campo Obrigatório (*)')
    })
  }

  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  onFileSelected(event: any) {

    const file: File = event.target.files[0];

    if (file) {
      this.file = file.name;
      const formData = new FormData();
      formData.append("file", file);
      const upload$ = this.postblogService.salvaImagem(formData);

      upload$.subscribe((resposta) => {
        this.postBlog.imagePost = resposta.link;
      });
      this.exibirSalvar = true;
    }
  }

  update(): void {
    this.postblogService.update(this.postBlog).subscribe(() => {
      this.toast.success('Imagem atualizada com sucesso!', 'Post Finalizado!');
      this.router.navigate(['/blog'])
    }, ex => {
      if (ex.error.errors) {
        ex.error.errors.forEach(element => {
          this.toast.error(element.message);
        });
      } else {
        this.toast.error(ex.error.message);
      }
    })
  }

}