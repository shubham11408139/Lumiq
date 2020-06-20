import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KeypadService {

  constructor(private http:HttpClient) { }



  getCode(code){
    let params = {
      code : code
    }
    return this.http.get(environment.backendUrl+"query",{params})
  }
}
