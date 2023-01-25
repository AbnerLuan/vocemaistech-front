import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from './../../services/usuario.service';
import { Usuario } from './../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  name = new FormControl(null, Validators.minLength(3));
  termos = new FormControl(null, Validators.requiredTrue)

  constructor(private router: Router,
    private usuarioService: UsuarioService,
    private toast: ToastrService,) { }

  ngOnInit(): void { }

  create(): void {
    console.log(this.usuario);
    this.usuarioService.create(this.usuario).subscribe(() => {
      this.toast.success('Usuario cadastrado com sucesso', 'Parabens');
      this.router.navigate(['minhaconta'])
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

  validaCampos(): boolean {
    return this.email.valid && this.password.valid && this.name.valid;
  }

} 
