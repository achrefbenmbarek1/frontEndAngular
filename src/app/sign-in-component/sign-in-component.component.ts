import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in-component',
  templateUrl: './sign-in-component.component.html',
  styleUrls: ['./sign-in-component.component.css']
})
export class SignInComponentComponent {
  constructor(private http: HttpClient) { }
  submit(userCredentials: { email: string, password: string }) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token',
        'Access-Control-Allow-Origin':'*'
      })
    };
    this.http.post("http://192.168.100.43:4000/medecins/login", userCredentials,httpOptions)
      .subscribe((res) => {
        console.log(res)
      })
    console.log(userCredentials)
  }
}
