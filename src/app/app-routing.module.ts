import { ConstructionComponent } from './components/construction/construction.component';
import { UserDetailComponent } from './components/admin/users-admin/user-detail/user-detail.component';
import { SidenavAdminComponent } from './components/admin/sidenav-admin/sidenav-admin.component';
import { DashboardAdminComponent } from './components/admin/dashboard-admin/dashboard-admin.component';
import { ListUsersAdminComponent } from './components/admin/users-admin/list-users-admin/list-users-admin.component';
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
import { PostsBlogComponent } from './components/admin/blog/posts-blog/posts-blog.component';
import { EditPostComponent } from './components/admin/blog/edit-post/edit-post.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'blog', component: ListPostsComponent },
  { path: 'home', component: HomeComponent },

  { path: 'cadastro', component: CadastroComponent },
  { path: 'post-details/:id', component: PostDetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'minhaconta', component: MinhacontaComponent, canActivate: [AuthGuard] },
  { path: 'sem-autorizacao', component: SemAutorizacaoComponent, canActivate: [AuthGuard] },
  { path: 'meus-cursos', component: MeusCursosComponent, canActivate: [AuthGuard] },
  { path: 'createpostblog', component: CreatepostblogComponent, canActivate: [AuthguardService], data: { expectedRole: ['ROLE_ADMIN'] } },
  {
    path: 'admin', component: SidenavAdminComponent, canActivate: [AuthguardService], data: { expectedRole: ['ROLE_ADMIN'] }, children: [
      { path: '', component: ConstructionComponent },
      { path: 'usuarios-admin', component: ListUsersAdminComponent },
      { path: 'usuarios-admin/user-detail/:id', component: UserDetailComponent },
      { path: 'dashboard-admin', component: DashboardAdminComponent },
      { path: 'construction', component: ConstructionComponent },
      { path: 'posts-blog', component: PostsBlogComponent },
      { path: 'posts-blog/edit-post/:id', component: EditPostComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
