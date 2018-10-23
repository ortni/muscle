import { Input, Component } from '@angular/core';

@Component({
  selector: 'ooo-education',
  templateUrl: './education.tag.html',
  styleUrls: ['./education.tag.sass']
})
export class EducationTag {
  @Input() db = {};
  @Input() data = {};
}
