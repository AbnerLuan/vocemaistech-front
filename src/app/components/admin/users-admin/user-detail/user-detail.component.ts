import { Component, OnInit } from '@angular/core';
import { CheckboxRequiredValidator, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  //if (this.usuario.profile.includes(0)) {
  //  var admin = document.getElementById("admin");
  //  (admin as HTMLInputElement).checked = true;

  checks = [
    { id: 0, name: 'ROLE_ADMIN', check: "false" },
    { id: 1, name: 'ROLE_CREATOR', check: "false" },
    { id: 2, name: 'ROLE_USER', check: "false" },
  ];

  usuario: Usuario = {
    id: '',
    email: '',
    cpf: '',
    password: '',
    name: '',
    memberSince: new Date(),
    profile: [],
  }

  name: FormControl = new FormControl(null, Validators.minLength(3))
  cpf: FormControl = new FormControl(null, Validators.required)
  email: FormControl = new FormControl(null, Validators.email)
  password: FormControl = new FormControl(null, Validators.minLength(3))

  constructor(private service: AuthService,
    private router: Router,
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private toast: ToastrService,
  ) { }

  ngOnInit(): void {
    this.usuario.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.usuarioService.findById(this.usuario.id).subscribe(resposta => {
      this.usuario = resposta;
      this.verificaRole();
    });
  }

  update(): void {
    this.usuarioService.update(this.usuario).subscribe(() => {
      this.toast.success('Usuario atualizado com sucesso');
      //  this.router.navigate(['minhaconta'])
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
    return this.name.valid && this.cpf.valid && this.email.valid && this.password.valid
  }

  addPerfil(perfil: any): void {
    if (this.usuario.profile.includes(perfil)) {
      this.usuario.profile.splice(this.usuario.profile.indexOf(perfil), 1);
    } else {
      this.usuario.profile.push(perfil);
    }
    console.log(this.usuario.profile)
  }

  verificaRole() {
    var maior = Math.max.apply(null, this.usuario.profile);
    for (var i = 0; i <= maior;) {
      if (this.usuario.profile.includes(i)) {
        this.checks[i].check = "true";
      } i++
    }
  }

}