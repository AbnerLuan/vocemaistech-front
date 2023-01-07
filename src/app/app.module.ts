import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/postsblog/blog.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MinhacontaComponent } from './components/minhaconta/minhaconta.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { CreatepostblogComponent } from './components/blog/createpostblog/createpostblog.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    MinhacontaComponent,
    CadastroComponent,
    CreatepostblogComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
