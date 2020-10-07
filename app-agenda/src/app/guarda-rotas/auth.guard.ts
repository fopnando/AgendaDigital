import { LoginComponent } from './../login/login.component';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Routes } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate{


  constructor(private LoginComponent: LoginComponent,
              private router: Router) { }

canActivate(
   route: ActivatedRouteSnapshot,
   state: RouterStateSnapshot
 ) : Observable<boolean> | boolean{


 /* if (this.LoginComponent.usuarioEstaAutenticado()){
    this.router.navigate(['/home'])
    return true;

  }else{
    this.router.navigate(['/login'])
    return false;
   }*/
   return true;
}

}
