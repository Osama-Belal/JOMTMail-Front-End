import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  sortingCategories: string[] = []
  sortingCategoriesActive: any = this.resetAllSortings();
  resetAllSortings(){
    return {
      'lexi': false,
      'priority': false,
      'date': false,
    }
  }

  @Output() sortingActions = new EventEmitter<string[]>();
  emitSortingAction(type: string){
    let index = this.sortingCategories.indexOf(type);
    this.sortingCategoriesActive[type] = !this.sortingCategoriesActive[type];
    this.sortingCategoriesActive[type] ? this.sortingCategories.push(type) : this.sortingCategories.splice(index, 1);
    this.sortingActions.emit(this.sortingCategories);
  }

  @Output() search = new EventEmitter<string>();
  emitSearch(keyword: string){
    this.search.emit(keyword);
  }
}
