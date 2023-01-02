import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactDTO } from '../DTO/ContactDTO';
import { FolderDTO } from '../DTO/FolderDTO';
import { MailDTO } from '../DTO/MailDTO';
import { ContactService } from '../Service/Contact/contact.service';
import { DialogService } from '../Service/Dialog/dialog.service';
import { FolderService } from '../Service/Folder/folder.service';
import { MailService } from '../Service/Mail/mail.service';
import { UserService } from '../Service/User/user.service';

@Component({
  selector: 'app-newComponent-dialog',
  templateUrl: './newComponent-dialog.component.html',
  styleUrls: ['./newComponent-dialog.component.css'],
})

export class NewMailComponent {
  
  constructor(public dialogservice: DialogService, public userService: UserService,
     public folderService: FolderService, public contactService: ContactService) { }
  
  important = "Must Enter a Value!"
  mailValid = "Must Enter a Valid Email!"
  limitLength(ch: number){ return ch + " Characters Only!"}
  userFiles!: FileList

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
  @Output() emitFile = new EventEmitter<FileList>();
  submitMail(){
    this.dialogservice.selectedDialog['mail'] = false
    let mail = <MailDTO>{
      from: this.userService.userEmail,
      to: this.mailGroup.controls.receiver.value, 
      subject: this.mailGroup.controls.subject.value, 
      content: this.mailGroup.controls.body.value,
      state: "mail",
      priority:4,
      isStarred: false
    };
    this.emitFile.emit(this.userFiles);
    this.emitMail.emit(mail);
    this.mailGroup.reset();
  }

  addFiles(e: any){
    if(e){
      this.userFiles = e.target.files
      console.log("files: ", this.userFiles)
    }
  }

  submitDraft(){
    this.dialogservice.selectedDialog['mail'] = false
    let mail = <MailDTO>{
      from: this.userService.userEmail,
      to: this.mailGroup.controls.receiver.value, 
      subject: this.mailGroup.controls.subject.value, 
      content: this.mailGroup.controls.body.value,
      state: "draft",
      priority:4,
      isStarred: false
    };
    this.emitMail.emit(mail);
    this.mailGroup.reset();
  }

  @Output() emitFolder = new EventEmitter<FolderDTO>();
  submitFolder(){
    this.dialogservice.selectedDialog['folder'] = false
    this.dialogservice.selectedDialog['update'] = false
    let folder = <FolderDTO>{
      folderName: this.folderGroup.controls.name.value,
      userId: this.userService.userId
    };
    this.folderService.create(folder).subscribe(data => {
      folder.folderId = data.folderId;
    })
    this.emitFolder.emit(folder);
    this.folderGroup.reset();
  }
  
  @Output() emitContact = new EventEmitter<ContactDTO>();
  submitContact(){
    this.dialogservice.selectedDialog['contact'] = false
    this.dialogservice.selectedDialog['update'] = false
    let contact:ContactDTO = <ContactDTO>{
      name: this.contactGroup.controls.name.value, 
      mails: this.contactGroup.controls.mail.value,
      userId: this.userService.userId
    };
    this.contactService.create(contact).subscribe(data => {
      contact.id = data.id
    })
    this.emitContact.emit(contact);
    this.contactGroup.reset();
    console.log("contact created: ", contact);
  }
}
