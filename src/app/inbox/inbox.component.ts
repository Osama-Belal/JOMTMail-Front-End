import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { FolderDTO } from '../DTO/FolderDTO';
import { MailDTO } from '../DTO/MailDTO';
import { DialogService } from '../Service/Dialog/dialog.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})

export class InboxComponent {

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

/* 
  ngOnInit(){
    this.emitInboxAction('read');
  } */

  showMail(mail: any){
    this.activeMail = mail;
  }
  
  selectMail(mail: any){
    var index = this.getMailIndex(mail);
    if(index == -1){
      this.selected.push(mail);console.log("Added")}
    else{
      this.selected.splice(index, 1);console.log("removed")}
    console.log(this.selected)
    this.allChecked = this.isAllSelected()
  }
  
  selectAllMails(){ 
    this.selected = []
    if(this.allChecked)
    this.mails.forEach((val:any) => {this.selected.push(Object.assign({}, val));});
    console.log(this.selected)
  }

  isAllSelected(){return this.selected.length == this.mails.length}
  someSelected(): boolean {return this.selected.length != 0 && !this.allChecked}

  isSelected(mail: MailDTO){
    for(var selec of this.selected)
      if(JSON.stringify(mail) == JSON.stringify(selec)) 
      return true
    return false
  }

  getMailIndex(mail: MailDTO){
    for(var i = 0;i < this.selected.length;i++)
      if(JSON.stringify(mail) == JSON.stringify(this.selected[i])) 
      return i
    return -1;
  }

  getPriority(pr: number){
    switch(pr){
      case 1: return "Unimportant";break;
      case 2: return "Normal";break;
      case 3: return "Important";break;
      case 4: return "Urgent";break;
      default: return "UnSet";break;
    }
  }

  openDialog(window: string, mail: MailDTO) {
    if(this.activeFolder.folderName != 'draft') return
    this.dialogservice.selectedDialog[window] = true;
    this.dialogservice.selectedDialog['update'] = true;
    this.dialogservice.toUpdate = mail;
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
  
}
