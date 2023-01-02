import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ContactDTO } from '../DTO/ContactDTO';
import { FolderDTO } from '../DTO/FolderDTO';
import { DialogService } from '../Service/Dialog/dialog.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})

export class SideBarComponent {
  @Input() contacts: ContactDTO[] = [];
  @Input() folders: FolderDTO[] = [];
  @Output() activeFolder = new EventEmitter<FolderDTO>  ();
  @Output() activeContact = new EventEmitter<ContactDTO>  ();
  
  constructor(public dialog: MatDialog, public dialogservice: DialogService) { }
  
  openDialog(window: string, update?: boolean, toUpdate?: any) {
    this.dialogservice.resetAllDialogs();
    this.dialogservice.selectedDialog[window] = true;
    this.dialogservice.selectedDialog['update'] = update;
    this.dialogservice.toUpdate = toUpdate;
    console.log(toUpdate);
  }

  selectFolder(folderIndex: any){
    console.log("my folder index:", folderIndex);
    this.activeFolder.emit(folderIndex);
  }

  selectContact(contactIndex: any){
    this.activeContact.emit(contactIndex);
  }

}