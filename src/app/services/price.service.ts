import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PriceService {
  private token: string;

  constructor(private http: Http) { }

  public login(name: string, password: string): void {
    var o = this.http
      .get('http://localhost:3000/authenticate')
      .map((response) => {
        var result = response.json();
        return result;
      })
      .subscribe(result => {
        this.token = result.token;
      });
  }

  public loadDate(): Observable<any> {
    const headers = new Headers();
    headers.append('x-access-token', this.token);
    const options: RequestOptionsArgs = { headers: headers };

    return this.http
      .get('http://localhost:3000/api/customers/1', options)
      .map((response) => {
        const result = response.json();
        console.log(result);
        return result;
      });
  }
}
