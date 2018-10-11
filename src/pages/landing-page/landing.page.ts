import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ooo-landing-page',
  templateUrl: 'landing.page.html',
  styleUrls: ['landing.page.sass']
})
export class LandingPage implements OnInit {
  data: any;
  text: any;
  constructor(private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.text = this.route.snapshot.data.store.text;
    this.data = this.route.snapshot.data.store.data;
  }
}
