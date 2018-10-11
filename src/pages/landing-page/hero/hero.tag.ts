import { Input, Component } from '@angular/core';

@Component({
  selector: 'ooo-hero',
  templateUrl: 'hero.tag.html',
  styleUrls: ['hero.tag.sass']
})
export class HeroTag {
  @Input() set data(v) {
    v = v || {};
    this._data = v || {};
    this.name = v.name || {};
    this.contacts = v.contacts || [];
    this.seeking = (v.seeking || []).join(', ');
  }
  get data() {
    return this._data;
  }
  @Input() set text(v) {
    this._text = v || {};
  }
  get text() {
    return this._text;
  }
  name: any = {};
  contacts = [];
  seeking = '';
  private _text;
  private _data;

}
