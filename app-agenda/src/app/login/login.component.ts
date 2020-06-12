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

  constructor(private router: Router ) { }

  ngOnInit() {
  }

  fazerLogin(){
    console.log(this.usuario);
    this.router.navigate(['/home']);
    this.telaLogin = false;
  }



}
