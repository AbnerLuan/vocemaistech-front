import { UsuarioService } from './../../services/usuario.service';
import { Usuario } from './../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  
    usuario: Usuario = {
    email: '',
    password: '',
    name: ''
  }

  email = new FormControl(null, Validators.email);
  password = new FormControl(null, Validators.minLength(3));
  name = new FormControl(null, Validators.minLength(3) );

  constructor(private service: AuthService, 
              private router: Router,
              private usuarioService: UsuarioService) { }

  ngOnInit(): void { }

  create(): void {
    this.usuarioService.create(this.usuario).subscribe(() => {
      alert('Usuario cadastrado com sucesso');
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

  validaCampos(): boolean {
    return this.email.valid && this.password.valid && this.name.valid;
  }

}{

}
