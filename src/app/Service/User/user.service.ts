import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDTO } from 'src/app/DTO/UserDTO';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private _url: string = "http://localhost:8080";
  private DTOType: string = "user";

  constructor(private http: HttpClient) { }

  Create(user: UserDTO){
    this.http.post(`${this._url}/create/${this.DTOType}`, user);
  }
  
  Read(user: UserDTO){
    this.http.post(`${this._url}/read/${this.DTOType}`, user);
  }
  
  Update(user: UserDTO){
    this.http.post(`${this._url}/update/${this.DTOType}`, user);
  }

  Delete(user: UserDTO){
    this.http.post(`${this._url}/delete/${this.DTOType}`, user);
  }
}