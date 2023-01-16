import { MeusCursosComponent } from './components/cursos/meus-cursos/meus-cursos.component';
import { SemAutorizacaoComponent } from './components/blog/sem-autorizacao/sem-autorizacao.component';
import { ListPostsComponent } from './components/blog/list-posts/list-posts.component';
import { PostDetailsComponent } from './components/blog/post-details/post-details.component';
import { CreatepostblogComponent } from './components/blog/createpostblog/createpostblog.component';

import { CadastroComponent } from './components/cadastro/cadastro.component';
import { AuthGuard } from './auth/auth.guard';
import { MinhacontaComponent } from './components/minhaconta/minhaconta.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardService } from './services/authguard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'blog', component: ListPostsComponent },
  { path: 'home', component: HomeComponent },

  { path: 'cadastro', component: CadastroComponent },
  { path: 'post-details/:id', component: PostDetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'minhaconta', component: MinhacontaComponent, canActivate: [AuthGuard] },
  { path: 'sem-autorizacao', component: SemAutorizacaoComponent },
  { path: 'meus-cursos', component: MeusCursosComponent },
  { path: 'createpostblog', component: CreatepostblogComponent, canActivate:[AuthguardService], data:{expectedRole:['ROLE_ADMIN']} },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
