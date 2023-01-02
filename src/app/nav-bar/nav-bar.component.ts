import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  sorting = new FormGroup({
    priority: new FormControl(0, [Validators.required])
  });

  @Output() sortingActions = new EventEmitter<string>();
  emitSortingAction(e: any, type: string){
    if(e.target.selected)
      this.sortingActions.emit(type);
  }

}
