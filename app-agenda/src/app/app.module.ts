import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { cadastroclienteModule} from './cadastro-cliente/cadastro-cliente.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routing } from './app-routing';
import { HomeComponent } from './home/home.component';
import { CadastroEmpresaComponent } from './cadastro-empresa/cadastro-empresa.component';
import { SharedModule } from './share/share.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { TipoCadastroComponent } from './tipo-cadastro/tipo-cadastro.component';
import { MenuComponent } from './menu/menu.component';
import { MaterializeModule } from 'angular2-materialize';
import { AuthGuard } from './guarda-rotas/auth.guard';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TipoCadastroComponent,
    CadastroEmpresaComponent,
    MenuComponent,
    CursosListaComponent,
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    AppRoutingModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    cadastroclienteModule
  ],
  providers: [AuthGuard,LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
