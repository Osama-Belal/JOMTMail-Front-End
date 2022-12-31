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
  
  important = "Must Enter a Value!"
  mailValid = "Must Enter a Valid Email!"
  limitLength(ch: number){ return ch + " Characters Only!"}

  mailGroup = new FormGroup({
    receiver: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    body: new FormControl('', [Validators.required]),
  });
  
  contactGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(15)]),
    mail: new FormControl('', [Validators.required, Validators.email])
  });

  folderGroup = new FormGroup({name: new FormControl('', [Validators.required, Validators.maxLength(15)])});

  fieldError(field: string, formgroup: FormGroup){ 
    return formgroup.get(field)?.invalid 
  }

  fieldErrorMessage(field: string, formgroup: FormGroup){ 
    if(formgroup.get(field)?.hasError(field) && field == 'name')
      return this.limitLength(15);

    return formgroup.get(field)?.hasError('required') ? this.important : 
    formgroup.get(field)?.hasError('email') ? this.mailValid :
    formgroup.get(field)?.hasError('maxlength') ? this.limitLength(30) : '';
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
