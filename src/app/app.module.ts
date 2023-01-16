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
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EditorModule,
    ToastrModule.forRoot({
      timeOut:5000,
      closeButton: true, 
      progressBar: true,      
    }),
    NgxMaskDirective, NgxMaskPipe,
    FontAwesomeModule,
    NgbModule,
    NgIf,
    NgbCarouselModule,
    BrowserAnimationsModule
      ],
  providers: [AuthInterceptorProvider, provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
