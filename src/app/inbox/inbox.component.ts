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

  updateAllComplete(mail: MailDTO) {
    this.allChecked = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
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
