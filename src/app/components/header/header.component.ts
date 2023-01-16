import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

import {
  faHouse, faBlog, faGraduationCap, faUserGroup,
  faArrowRightFromBracket, faArrowRightToBracket
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isMenuCollapsed = true;
  usuarioLogado = '';

  iconHome = faHouse;
  iconBlog = faBlog;
  iconCursos = faGraduationCap;
  iconComunidade = faUserGroup;
  iconLogout = faArrowRightFromBracket;
  iconLogin = faArrowRightToBracket;

  constructor(private service: AuthService,
    private toast: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    
  }  

  logout() {
    this.service.logout();
    this.toast.info('Logout com sucesso', 'Logout', { timeOut: 500 });
    this.verificaUsuario();
    this.router.navigate(['']);    
  }

  verificaUsuario() {
    this.usuarioLogado = (localStorage.getItem('nameUser'))
    if (this.service.isAuthenticated() == false) {
      return false;
    } else {
      return true;
    }
  }
}
