import { AuthService } from './login/auth.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rotas';
  mostrarMenu: boolean=true;


  constructor(private authService: AuthService){

}
ngOnInit(){



};


}


