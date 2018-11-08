import { Input, Component } from '@angular/core';

const iconMap = {
  school: 'institute',
  startup: 'lightbulb',
  company: 'building'
};

@Component({
  selector: 'ck-org',
  templateUrl: './org.tag.html',
  styleUrls: ['./org.tag.sass']
})
export class OrgTag {
  @Input() set data({ name, type }) {
    this.text = name;
    this.icon = iconMap[type || 'company'];
  }
  text = '';
  icon = '';
}
