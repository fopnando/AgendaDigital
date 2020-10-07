import { LoginService } from "./login.service";
import { Component, OnInit } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { toast } from "angular2-materialize";
import { Login } from "./login";
import { Observable, empty } from "rxjs";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;
  login$: Observable<Login>;
  modal: any;
  location: any;
 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) {}
  ngOnInit() {
    this.formulario = this.formBuilder.group({
      id: [null],
      nome: [
        null,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
        ],
      ],
      senha: [null],
    });

   
  }

   
  list() {

  //  this.login$ = this.formulario.value;
  //   console.log(this.login$);
  //   this.loginService.list()
  
  if(this.formulario.get('nome').value == 'teste' && this.formulario.get('senha').value == '123'){
    toast('Bem vindo ao Sistema de Gestão de Agenda!' , 2200, 'blue');
  //  this.usuarioAutenticado = true
    this.router.navigate(['/tipoCadastro']);
  }else{
  //   console.log("falso" + this.verificaLogin)
     toast('Usuario ou Senha Invalido!' , 2200, 'red');
} 
     
  
 
  }

  updateForm(login) {
    this.formulario.patchValue({
      nome: login.nome,
      senha: login.senha
    });
    console.log(login);

  }

  verificaValidTouched(campo: string) {
    return (
      !this.formulario.get(campo).valid && this.formulario.get(campo).touched
    );
  }

  aplicaCssErro(campo) {
    return {
      "has-error": this.verificaValidTouched(campo),
      "has-feedback": this.verificaValidTouched(campo),
    };
  }
}
