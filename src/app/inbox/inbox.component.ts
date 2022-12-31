import { Component, EventEmitter, Output, Input } from '@angular/core';
import { MailDTO } from '../DTO/MailDTO';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})

export class InboxComponent {

  mailActive = false;
  active: MailDTO = {
    id: '',from: '',to: '',subject: '',content: '', timestamp: '', 
    state: '', isStarred: false, priority: 0, senderID: '', receiverID: ''};
  selected: any = []

  @Input() mails: MailDTO[] = [];
  @Output() inboxAction = new EventEmitter<string>();
  @Output() selectedMails = new EventEmitter();

  allChecked = false;

  showMail(mail: any){
    this.active = mail;
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
  
}
