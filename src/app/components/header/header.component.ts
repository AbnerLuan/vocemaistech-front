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

  iconHome = faHouse;
  iconBlog = faBlog;
  iconCursos = faGraduationCap;
  iconComunidade = faUserGroup;
  iconLogout = faArrowRightFromBracket;
  iconLogin = faArrowRightToBracket;

  constructor(private authService: AuthService,
    private toast: ToastrService,
  ) { }

  ngOnInit(): void { }

  logout() {
    this.authService.logout();
    this.toast.info('Logout com sucesso', 'Logout', { timeOut: 500 })
  }
}
