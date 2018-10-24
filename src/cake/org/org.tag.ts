import { Input, Component } from '@angular/core';

@Component({
  selector: 'ck-org',
  templateUrl: './org.tag.html',
  styleUrls: ['./org.tag.sass']
})
export class OrgTag {
  @Input() data;
}
