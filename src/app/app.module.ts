import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MinhacontaComponent } from './components/minhaconta/minhaconta.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { CreatepostblogComponent } from './components/blog/createpostblog/createpostblog.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { PostDetailsComponent } from './components/blog/post-details/post-details.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListPostsComponent } from './components/blog/list-posts/list-posts.component';
import { SemAutorizacaoComponent } from './components/blog/sem-autorizacao/sem-autorizacao.component';
import { MeusCursosComponent } from './components/cursos/meus-cursos/meus-cursos.component';
import { SidenavAdminComponent } from './components/admin/sidenav-admin/sidenav-admin.component';
import { ListUsersAdminComponent } from './components/admin/users-admin/list-users-admin/list-users-admin.component';
import { DashboardAdminComponent } from './components/admin/dashboard-admin/dashboard-admin.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { UserDetailComponent } from './components/admin/users-admin/user-detail/user-detail.component';
import { ConstructionComponent } from './components/construction/construction.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    ListPostsComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    MinhacontaComponent,
    CadastroComponent,
    CreatepostblogComponent,
    PostDetailsComponent,
    SemAutorizacaoComponent,
    MeusCursosComponent,
    SidenavAdminComponent, ListUsersAdminComponent, DashboardAdminComponent, UserDetailComponent, ConstructionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EditorModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      closeButton: true,
      progressBar: true,
    }),
    NgxMaskDirective, NgxMaskPipe,
    FontAwesomeModule,
    NgbModule,
    NgIf,
    NgbCarouselModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatCheckboxModule,
  ],
  providers: [AuthInterceptorProvider, provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
