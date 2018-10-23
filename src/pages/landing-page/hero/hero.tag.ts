import { Input, Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'ooo-hero',
  templateUrl: 'hero.tag.html',
  styleUrls: ['hero.tag.sass']
})
export class HeroTag {
  @Input() set data(v) {
    v = v || {};
    this._data = v || {};
    this.objective = v.objective;
    this.name = v.name || {};
    this.contacts = v.contacts || [];
    this.seeking = (v.seeking || []).join(', ');
    ['bg', 'me'].forEach(k => {
      const { img = [] } = v;
      this.img[k] = `url(${img[k]})`;
    });
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
  img = {
    me: '',
    bg: ''
  };
  name: any = {};
  contacts = [];
  seeking = '';
  objective = '';
  private _text;
  private _data;
  constructor(private dom: DomSanitizer) {
  }
}
