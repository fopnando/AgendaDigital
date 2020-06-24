import { CampoControlErroComponent } from './share/campo-control-erro/campo-control-erro.component';
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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TipoCadastroComponent,
    CadastroEmpresaComponent,
    MenuComponent,
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
  providers: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
