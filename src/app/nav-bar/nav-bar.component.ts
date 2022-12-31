import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  @Output() sortingActions = new EventEmitter<string>();
  emitSortingAction(e: any, type: string){
    if(e.target.selected)
      this.sortingActions.emit(type);
  }

}
