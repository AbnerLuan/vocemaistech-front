import { Credenciais } from 'src/app/models/credenciais';
import { UsuarioService } from './../../services/usuario.service';
import { Usuario } from './../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-minhaconta',
  templateUrl: './minhaconta.component.html',
  styleUrls: ['./minhaconta.component.css']
})
export class MinhacontaComponent implements OnInit {

  creds: Credenciais = {       
    email: '',
    password: '',
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

  email = new FormControl(null, Validators.email);
  password = new FormControl(null, Validators.minLength(3));
  name = new FormControl(null, Validators.minLength(3) );
  cpf = new FormControl(null, Validators.minLength(11))

  constructor(private service: AuthService, 
              private router: Router,
              private usuarioService: UsuarioService,
              private route: ActivatedRoute,
              private toast: ToastrService,
  ) { }

  ngOnInit(): void { 
    this.creds.email = localStorage.getItem('email')
    this.findByEmail();    
  }

  validaCampos(): boolean {
    return this.email.valid && this.password.valid && this.name.valid && this.cpf.valid;
  }

  findByEmail(): void {
    this.usuarioService.findByEmail(this.creds.email).subscribe(resposta => {           
      this.usuario = resposta;
    }
    );
  }

  update(): void {
    this.usuarioService.update(this.usuario).subscribe(() => {
      this.toast.success('Usuario atualizado com sucesso');
      localStorage.setItem('nameUser', this.usuario.name); 
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

}

