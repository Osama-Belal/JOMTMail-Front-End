import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactDTO } from '../DTO/ContactDTO';
import { FolderDTO } from '../DTO/FolderDTO';
import { MailDTO } from '../DTO/MailDTO';
import { DialogService } from '../Service/Dialog/dialog.service';

@Component({
  selector: 'app-newComponent-dialog',
  templateUrl: './newComponent-dialog.component.html',
  styleUrls: ['./newComponent-dialog.component.css'],
})

export class NewMailComponent {
  
  constructor(public dialogservice: DialogService) { }
  
  mailGroup = new FormGroup({
    receiver: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    body: new FormControl('', [Validators.required]),
  });
  mailReceiverError(){ return this.mailGroup.get('receiver')?.invalid }
  mailSubjectError(){ return this.mailGroup.get('subject')?.invalid }
  mailBodyError(){ return this.mailGroup.get('body')?.invalid }
  mailReceiverErrorMessage(){ 
    return this.mailGroup.get('receiver')?.hasError('required') ? 'Must Enter a Value' : 
    this.mailGroup.get('receiver')?.hasError('email') ? 'Enter a Valid Mail!' : '';
  }
  mailSubjectErrorMessage(){ 
    return this.mailGroup.get('subject')?.hasError('required') ? 'Must Enter a Value' : 
    this.mailGroup.get('subject')?.hasError('maxlength') ? '30 Characters are Enouph!' : '';
  }
  mailBodyErrorMessage(){ return this.mailGroup.get('body')?.hasError('required') ? 'Must Enter a Value' : '';}

  
  contactGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(15)]),
    mail: new FormControl('', [Validators.required, Validators.email])
  });
  contactNameError(){ return this.contactGroup.get('name')?.invalid }
  contactMailError(){ return this.contactGroup.get('mail')?.invalid }
  contactNameErrorMessage(){ 
    return this.contactGroup.get('name')?.hasError('required') ? 'Must Enter a Value' : 
    this.contactGroup.get('name')?.hasError('maxlength') ? '15 Characters only!' : '';
  }
  contactMailErrorMessage(){ 
    return this.contactGroup.get('mail')?.hasError('required') ? 'Must Enter a Value' : 
    this.contactGroup.get('mail')?.hasError('email') ? 'Enter a Valid Email!' : '';
  }


  folderGroup = new FormGroup({name: new FormControl('', [Validators.required, Validators.maxLength(15)])});
  folderError(){ return this.folderGroup.invalid }
  folderNameErrorMessage(){ 
    if(this.folderGroup.hasError('required')) return 'Must Enter a Value';
    return this.folderGroup.hasError('maxlength') ? '15 Characters only!' : ''; 
  }

  @Output() emitMail = new EventEmitter<MailDTO>();
  submitMail(){
    this.dialogservice.selectedDialog['mail'] = false
    let mail = <MailDTO>{
      to: this.mailGroup.controls.receiver.value, 
      subject: this.mailGroup.controls.subject.value, 
      content: this.mailGroup.controls.body.value};
    this.emitMail.emit(mail);
    this.mailGroup.reset();
  }

  submitDraft(){
    this.dialogservice.selectedDialog['mail'] = false
    let mail = <MailDTO>{
      to: this.mailGroup.controls.receiver.value, 
      subject: this.mailGroup.controls.subject.value, 
      content: this.mailGroup.controls.body.value};
    this.emitMail.emit(mail);
    this.mailGroup.reset();
  }

  @Output() emitFolder = new EventEmitter<FolderDTO>();
  submitFolder(){
    this.dialogservice.selectedDialog['folder'] = false
    let folder = <FolderDTO>{name: this.folderGroup.controls.name.value};
    this.emitFolder.emit(folder);
    this.folderGroup.reset();
  }
  
  @Output() emitContact = new EventEmitter<ContactDTO>();
  submitContact(){
    this.dialogservice.selectedDialog['contact'] = false
    let contact = <ContactDTO>{
      name: this.contactGroup.controls.name.value, 
      mail: this.contactGroup.controls.mail.value};
    this.emitContact.emit(contact);
    this.contactGroup.reset();
  }
}
