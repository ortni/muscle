import { Input, Component } from '@angular/core';

@Component({
  selector: 'ooo-expertise',
  templateUrl: './expertise.tag.html',
  styleUrls: ['./expertise.tag.sass']
})
export class ExpertiseTag {
  @Input() text: any;
  @Input() set data(v) {
    this._data = v;
  }
  private _data;
}
