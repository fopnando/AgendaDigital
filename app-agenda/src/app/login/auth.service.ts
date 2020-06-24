import { LoginComponent } from './login.component';
import { Usuario } from './usuario';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { toast } from 'angular2-materialize';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado = false;


    constructor(private router: Router) { }

usuarioEstaAutenticado() {
  return this.usuarioAutenticado;
}

}




