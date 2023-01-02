import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AttachmentDTO } from 'src/app/DTO/AttachmentDTO';
import { MailDTO } from 'src/app/DTO/MailDTO';
import { UserDTO } from 'src/app/DTO/UserDTO';
import { UserService } from '../User/user.service';

@Injectable({
  providedIn: 'root'
})

export class MailService {

  private _url: string = "http://localhost:8080";
  private DTOType: string = "mail";

  constructor(private http: HttpClient, private userService: UserService) { }

  create(mail: MailDTO, files: FileList){
    let queryParams = new HttpParams();
    let formParams = new FormData();
    formParams.append('mail', JSON.stringify(mail))
    for(let i = 0; i < files.length; i++){
      formParams.append('file', <File>files.item(i), files.item(i)?.name)
    }
    console.log("parameters: ", formParams)
      return this.http.post<MailDTO>(`${this._url}/${this.DTOType}/send`, formParams);
  }
  
  postDraft(mail: MailDTO){
    let queryParams = new HttpParams();
    let formParams = new FormData();

    formParams.append('mail', JSON.stringify(mail))
    return this.http.post<MailDTO>(`${this._url}/draft/post`, formParams);
  }

  sendDraft(mail: MailDTO) {
    return this.http.post<MailDTO>(`${this._url}/draft/send`, mail);
  }
  


  getAllMail(folderID: String){
    console.log("get mail called")
    return this.http.get<MailDTO[]>(`${this._url}/${this.DTOType}/get_mails/${folderID}`);
  }

  read(mail: MailDTO){
    return this.http.get(`${this._url}/read/${this.DTOType}`);
  }
  
  update(){
    // this.http.post(`${this._url}/update/${this.DTOType}`, mail);
    return [{}] 
  }

  delete(mail: MailDTO){
    this.http.post(`${this._url}/delete/${this.DTOType}`, mail);
  }
  
  download(mailId: string){ 
    return this.http.get<AttachmentDTO[]>(`${this._url}/files/${mailId}`);
  }

}
