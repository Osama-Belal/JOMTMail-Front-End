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

  create(contact: ContactDTO){
    return this.http.post<ContactDTO>(`${this._url}/${this.DTOType}/add`, contact);
  }
  
  read(contact: ContactDTO){
    this.http.post(`${this._url}/read/${this.DTOType}`, contact);
  }
  
  update(contact: ContactDTO){
    this.http.post(`${this._url}/update/${this.DTOType}`, contact);
  }

  delete(contact: ContactDTO){
    this.http.post(`${this._url}/delete/${this.DTOType}`, contact);
  }
  
}
