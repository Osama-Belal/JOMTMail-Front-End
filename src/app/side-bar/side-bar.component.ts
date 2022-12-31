import { Component, Input } from '@angular/core';
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
  
  constructor(public dialog: MatDialog, public dialogservice: DialogService) { }
  
  openDialog(window: string) {
    this.dialogservice.resetAllDialogs();
    this.dialogservice.selectedDialog[window] = true;
  }

  

}