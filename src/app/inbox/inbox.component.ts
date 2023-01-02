import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { FolderDTO } from '../DTO/FolderDTO';
import { MailDTO } from '../DTO/MailDTO';
import { DialogService } from '../Service/Dialog/dialog.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})

export class InboxComponent implements OnInit {

  mailActive = false;
  activeMail: MailDTO = this.resetActiveMail();
  allChecked = false;
  selected: any = []

  constructor(public dialogservice: DialogService) { }

  @Input() mails: MailDTO[] = [];
  @Input() folders: FolderDTO[] = [];
  @Input() activeFolder!: FolderDTO;
  @Output() inboxAction = new EventEmitter<string>();
  @Output() selectedMail = new EventEmitter<MailDTO>();
  @Output() selectedMails = new EventEmitter<MailDTO[]>();


  ngOnInit(){
    this.emitInboxAction('read');
  }

  showMail(mail: any){
    this.activeMail = mail;
  }
  
  selectMail(e: any, mail: any){
    var index = this.selected.indexOf(mail);
    if(index == -1)
      this.selected.push(mail);
    else
      this.selected.splice(index, 1);
    this.allChecked = this.isAllSelected()
  }

  selectAllMails(){ 
    this.selected = []
    if(this.allChecked)
      this.mails.forEach((val:any) => {this.selected.push(Object.assign({}, val));});
  }

  isAllSelected(){return this.selected.length == this.mails.length}
  someSelected(): boolean {return this.selected.length != 0 && !this.allChecked}

  isSelected(mail: MailDTO){
    for(var selec of this.selected)
      if(JSON.stringify(mail) == JSON.stringify(selec)) 
      return true
    return false
  }

  openDialog(window: string, update?: boolean, mail?: MailDTO) {
    this.dialogservice.resetAllDialogs();
    this.dialogservice.selectedDialog[window] = true;
    if(this.activeFolder.folderName == "draft"){
      this.dialogservice.selectedDialog['update'] = update;
      this.dialogservice.toUpdate = mail;
    }
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
    return {
      id: '',from: '',to: '',subject: '',content: '', timestamp: '', 
      state: '', isStarred: false, priority: 0, senderID: '', receiverID: ''};
  }
  
}
