import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  telaLogin: boolean = false;
  usuario: Usuario = new Usuario();
  usuarioMockado: Usuario = new Usuario();
  
  constructor(private router: Router ) { }
    
  ngOnInit() {
  }

  fazerLogin(){
    //deve ser obtido pelo serviço
    this.usuarioMockado.nome = "usuario";
    this.usuarioMockado.senha = "123";
    
    console.log("Nome: " + this.usuario.nome + " - Senha: " + this.usuario.senha);

    if(this.usuario.nome == this.usuarioMockado.nome && this.usuario.senha == this.usuarioMockado.senha){
      this.router.navigate(['/home']);
      this.telaLogin = false;
    }else{
      alert("Acesso negado.")
    }
  }



}
