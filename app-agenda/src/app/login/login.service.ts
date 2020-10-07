import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Login} from './login'
import { environment } from 'src/environments/environment';
import { delay, tap, take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
login$: Login;
  constructor(private http:HttpClient) { }

  private readonly API =  `${environment.API}login`

  listarUsuarios(){
    console.log(this.login$)
    return this.http.get<Login[]>(this.API)
    .pipe(
      delay(2000),
      tap(console.log)
    );
  
    }
    loadById(){
      return this.http.get(`${this.API}`).pipe(take(1));
    }

    
    list(){
      return this.http.get<Login[]>(this.API)
      .pipe(
        delay(2000),
       tap(console.log)
      );
      }
  
}
