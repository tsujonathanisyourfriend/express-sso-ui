import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Injectable()
export class PriceService {
  public static token: string;

  constructor() { }

  // public login(name: string, password: string): void {
  //   this.http.get('http://localhost:3000/authenticate').subscribe(response => {
  //     PriceService.token = (<any>response).token;
  //   });
  // }

  // public loadDate(): Observable<any> {
  //   return this.http.get('http://localhost:3000/api/customers/1').subscribe(response => {
  //     var result = response.json();
  //     return result;
  //   });
  // }
}
