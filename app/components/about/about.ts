import {Component} from 'angular2/core';

import {PeopleList} from '../../services/people_list';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';

@Component({
  selector: 'about',
  templateUrl: './components/about/about.html',
  directives: [MATERIAL_DIRECTIVES]
})
export class AboutCmp {
  public nameModel: string = '';

  constructor(public list: PeopleList) {
  }

  /**
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    this.list.add(this.nameModel);
    this.nameModel = '';
    return false;
  }
}
