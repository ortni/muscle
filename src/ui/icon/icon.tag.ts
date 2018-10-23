import { HostBinding, OnChanges, Input, Component } from '@angular/core';

@Component({
    selector: 'ooo-icon',
    templateUrl: 'icon.tag.html',
    styleUrls: ['icon.tag.sass', 'content.scss']
})
export class IconTag implements OnChanges {
    @Input() prefix = 'mu';
    @Input() name = '';
    @Input() class = '';
    @HostBinding('class') klass = '';

    constructor() {
        this.updateKlass();
    }

    ngOnChanges(e) {
        if (e.prefix || e.name) {
            this.updateKlass();
        }
    }

    private updateKlass() {
        const mc = this.prefix ? `${this.prefix}-${this.name}` : this.name;
        const visible = !!this.name ? 'visible' : '';
        this.klass = [this.class, mc, visible].join(' ');
    }
}
