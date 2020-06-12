import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { cadastroclienteModule} from './cadastro-cliente/cadastro-cliente.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { LoginComponent } from './login/login.component';
import { routing } from './app-routing';
import { HomeComponent } from './home/home.component';
import { CadastroEmpresaComponent } from './cadastro-empresa/cadastro-empresa.component';
import { FormDebugComponent } from './share/form-debug/form-debug.component';
import { SharedModule } from './share/share.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { TipoCadastroComponent } from './tipo-cadastro/tipo-cadastro.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TipoCadastroComponent,
    CadastroEmpresaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    cadastroclienteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
