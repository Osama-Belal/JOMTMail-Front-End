import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactDTO } from 'src/app/DTO/ContactDTO';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  private _url: string = "http://localhost:8080";
  private DTOType: string = "contact";

  constructor(private http: HttpClient) { }

  Create(contact: ContactDTO){
    this.http.post(`${this._url}/create/${this.DTOType}`, contact);
  }
  
  Read(contact: ContactDTO){
    this.http.post(`${this._url}/read/${this.DTOType}`, contact);
  }
  
  Update(contact: ContactDTO){
    this.http.post(`${this._url}/update/${this.DTOType}`, contact);
  }

  Delete(contact: ContactDTO){
    this.http.post(`${this._url}/delete/${this.DTOType}`, contact);
  }
  
}
