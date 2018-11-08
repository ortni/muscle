import { Input, Component } from '@angular/core';

@Component({
  selector: 'ooo-education',
  templateUrl: './education.tag.html',
  styleUrls: ['./education.tag.sass']
})
export class EducationTag {
  @Input() set db(v) {
    this.org = v.organisations;
    this.edu = v.educations;
    this.loc = v.locations;
  }
  @Input() set data(v) {
    this._data = v || {};
  }
  get data() {
    return this._data;
  }
  org = {};
  edu = {};
  loc = {};
  private _data;
}
