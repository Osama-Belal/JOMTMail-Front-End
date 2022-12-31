import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MailDTO } from 'src/app/DTO/MailDTO';

@Injectable({
  providedIn: 'root'
})

export class MailService {

  private _url: string = "http://localhost:8080";
  private DTOType: string = "mail";

  constructor(private http: HttpClient) { }

  create(mail: MailDTO){
    return this.http.post<MailDTO>(`${this._url}/create/${this.DTOType}`, mail);
  }
  
  read(mail: MailDTO){
    this.http.post(`${this._url}/read/${this.DTOType}`, mail);
  }
  
  update(){
    // this.http.post(`${this._url}/update/${this.DTOType}`, mail);
    return [{}] 
  }

  Delete(mail: MailDTO){
    this.http.post(`${this._url}/delete/${this.DTOType}`, mail);
  }
}
