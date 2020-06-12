import { HttpClient,  } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }

  getEstadosBr() {
  return this.http.get<Array<any>>('assets/dados/estadosbr.json');
  // .map((res: Response) => res.json());
}

}
