import { Input, Component } from '@angular/core';

@Component({
  selector: 'ooo-education',
  templateUrl: './education.tag.html',
  styleUrls: ['./education.tag.sass']
})
export class EducationTag {
  @Input() db = {};
  @Input() set data(v) {
    this._data = v || {};
  }
  get data() {
    return this._data;
  }
  private _data;
}
