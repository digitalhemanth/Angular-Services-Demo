import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class MyDataService {

  constructor(private http: Http) { }

  fechData(){
    return this.http.get('https://my-json-server.typicode.com/typicode/demo/db').map(
      (Response)=>Response.json()
    ).subscribe(
      (data)=>console.log(data)
    )
  }


success(){
  return"sccessful";
}
}
