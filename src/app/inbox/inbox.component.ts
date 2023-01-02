import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { FolderDTO } from '../DTO/FolderDTO';
import { MailDTO } from '../DTO/MailDTO';
import { MailService } from '../Service/Mail/mail.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})

export class InboxComponent implements OnInit {

  mailActive = false;
  activeMail: MailDTO = this.resetActiveMail();
  selected: any = []

  @Input() mails: MailDTO[] = [];
  @Input() folders: FolderDTO[] = [];
  @Output() inboxAction = new EventEmitter<string>();
  @Output() selectedMail = new EventEmitter<MailDTO>();
  @Output() selectedMails = new EventEmitter<MailDTO[]>();
  fileUrl: string = "af9bf1fb-3cf6-4894-b044-7ec96da88a8e";
  allChecked = false;

  constructor(public mailService: MailService){}

  ngOnInit(){
    this.emitInboxAction('read');
  }

  showMail(mail: any){
    this.activeMail = mail;
  }
  
  selectMail(e: any, mail: any){
    var index = this.selected.indexOf(mail);
    if(e.target.checked)
      this.selected.push(mail);
    else
      this.selected.splice(index, 1);
    console.log(this.selected);
  }

  selectAllMails(e: any){ 
    if(e.target.checked)
      this.mails.forEach((val:any) => {if(!this.selected.includes(val)) this.selected.push(Object.assign({}, val));});
    else
      this.selected = [];
    console.log(this.selected);
  }

  emitInboxAction(type: string){
    this.selectedMails.emit(this.selected);
    this.inboxAction.emit(type);
  }
  
  emitMailAction(type: string, mail: MailDTO, folder?: FolderDTO){
    this.mailActive = false;
    this.activeMail = this.resetActiveMail();
    this.selectedMail.emit(mail);
    this.inboxAction.emit(type);
  }

  resetActiveMail(){
    return new MailDTO();
  }
  
  downloadFile(){
    this.mailService.download(this.fileUrl).subscribe(data => {
      // console.log("file downloaded: ", data)
      saveAs(data);
    });
  }

}
