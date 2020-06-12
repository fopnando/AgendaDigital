import { TipoCadastroComponent } from './tipo-cadastro/tipo-cadastro.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
//import { AuthGuard } from './guards/auth-guard';
import { CanActivate } from '@angular/router';
//import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


const APP_ROUTES:Routes = [
  //  {path: 'cursos', loadChildren: 'app/cursos/cursos.module#CursosModule'},
  //  {path: 'alunos', loadChildren: 'app/alunos/alunos.module#AlunosModule'},
      { path: '',  component: LoginComponent},
      { path: 'home',  component: HomeComponent},
      { path: 'cadclie',  component: CadastroClienteComponent},
      { path: 'tipoCadastro', component: TipoCadastroComponent}
  //    canActivate: [AuthGuard]
  //}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
