import { PostBlog } from './../../../models/postblog';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Credenciais } from 'src/app/models/credenciais';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-createpostblog',
  templateUrl: './createpostblog.component.html',
  styleUrls: ['./createpostblog.component.css']
})
export class CreatepostblogComponent implements OnInit {

  creds: Credenciais = {       
    email: '',
    password: '',
  }

  postBlog: PostBlog = {        
    title: '',
    author: '',    
    text: '',
    categoryPost: '',
    subCategory: '',
    creator: '',
    nameCreator: ''
  }
  
  usuario: Usuario = {
    id: 0,
    email: '',
    cpf: '',
    password: '',
    name: '',
    memberSince: new Date(),
    profile: [],
  }

  title = new FormControl(null, Validators.minLength(10));
  password = new FormControl(null, Validators.minLength(3));
  name = new FormControl(null, Validators.minLength(3) );  
  cpf = new FormControl(null, Validators.minLength(11))

  constructor(private service: AuthService, 
              private router: Router,
              private usuarioService: UsuarioService,
              private route: ActivatedRoute
  ) { }

  ngOnInit(): void { 
    this.creds.email = localStorage.getItem('email')
    this.findByEmail();    
  }

  validaCampos(): boolean {
    return this.title.valid && this.password.valid && this.name.valid && this.cpf.valid;
  }

  findByEmail(): void {
    this.usuarioService.findByEmail(this.creds.email).subscribe(resposta => {           
      this.usuario = resposta;
    }
    );
  }

  update(): void {
    this.usuarioService.update(this.usuario).subscribe(() => {
      alert('Usuario atualizado com sucesso');
      this.router.navigate(['minhaconta'])
    }, ex => {
      if (ex.error.errors) {
        ex.error.errors.forEach(element => {
          alert(element.message);
        });
      } else {
        alert(ex.error.message);
      }
    })
  }

}