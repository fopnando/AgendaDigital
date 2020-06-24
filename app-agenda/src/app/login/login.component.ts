import { CampoControlErroComponent } from './../share/campo-control-erro/campo-control-erro.component';
import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { AuthService } from './auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { toast } from 'angular2-materialize';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  usuarioAutenticado = false;
  verificaLogin = false;
  usuario: Usuario = new Usuario('nome', 'senha');
  formulario: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService

 ) { }
ngOnInit() {

  this.formulario = this.formBuilder.group({
    nome: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
    senha: [null]
  });
}

onsubmit() {

    if(this.formulario.get('nome').value == 'teste' && this.formulario.get('senha').value == '123'){
      toast('Bem vindo ao Sistema de Gestão de Agenda!' , 2200, 'blue');
      this.usuarioAutenticado = true
      this.router.navigate(['/home']);
    }else{
       console.log("falso" + this.verificaLogin)
       toast('Usuario ou Senha Invalido!' , 2200, 'red');
  }

  }

  verificaValidTouched(campo: string) {
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;

  }

  aplicaCssErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

}







