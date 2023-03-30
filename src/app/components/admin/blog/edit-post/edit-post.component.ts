import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostBlog } from 'src/app/models/postblog';
import { PostblogService } from 'src/app/services/postblog.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  file = '';

  postBlog: PostBlog = {
    id: 0,
    title: '',
    nameAuthor: '',
    author: localStorage.getItem('idUser'),
    text: '',
    categoryPost: '',
    subCategory: '',
    imagePost: 'https://s3.amazonaws.com/www.vocemaistech.com.br/assets/img/new-post-banner.jpg',
    imageName: '',
  }

  title = new FormControl(null, Validators.minLength(10));
  category = new FormControl(null, Validators.minLength(3));
  subcategory = new FormControl(null, Validators.minLength(11));
  text = new FormControl(null, Validators.minLength(5));


  constructor(private postblogService: PostblogService,
    private router: Router,
    private toast: ToastrService,
    private route: ActivatedRoute,
    private service: PostblogService,
  ) { }

  ngOnInit(): void {
    this.postBlog.nameAuthor = localStorage.getItem('nameUser').split(' ')[0];
    this.postBlog.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.postblogService.findById(this.postBlog.id).subscribe(resposta => {
      this.postBlog = resposta;
    });
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
    }
  }

  update(): void {
    this.postblogService.update(this.postBlog).subscribe(() => {
      this.toast.success('Postagem atualizada com sucesso!', 'Edição Finalizada!');
      this.router.navigate(['/admin/posts-blog'])
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

  deleteImage(imageName: any): void {
    this.postBlog.imageName = this.postBlog.imagePost.substring(46, this.postBlog.imagePost.length)
    this.service.deleteImage(this.postBlog.imageName).subscribe((resposta) => {
      if (resposta === null) {
        this.postBlog.imagePost = 'https://s3.amazonaws.com/www.vocemaistech.com.br/assets/img/new-post-banner.jpg';
        this.toast.info('Imagem deletada com sucesso!');
      }
    });
  }

}