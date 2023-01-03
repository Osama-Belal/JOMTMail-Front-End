import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AttachmentDTO } from 'src/app/DTO/AttachmentDTO';
import { FolderDTO } from 'src/app/DTO/FolderDTO';
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

  create(mail: MailDTO){
    let queryParams = new HttpParams();
    let formParams = new FormData();
    console.log("create mail called: ", mail)
    formParams.append('mail', JSON.stringify(mail))

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
  
  update(mail: MailDTO){
    return this.http.put(`${this._url}/update/${this.DTOType}`, mail);
  }

  delete(mail: MailDTO){
    return this.http.post(`${this._url}/delete/${this.DTOType}`, mail);
  }
  
  getAttachments(mailId: string){ 
    console.log("id", mailId);
    return this.http.get<AttachmentDTO[]>(`${this._url}/files/${mailId}`);
  }
  
  addMailToFolder(mail: MailDTO, folder: FolderDTO){
    mail.folderId = folder.folderId;
    return this.http.put(`${this._url}/${this.DTOType}/add_to_folder`, mail);
  }

}
