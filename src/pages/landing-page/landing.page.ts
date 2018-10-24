import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ooo-landing-page',
  templateUrl: 'landing.page.html',
  styleUrls: ['landing.page.sass']
})
export class LandingPage implements OnInit {
  db: any;
  data: any;
  text: any;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    const { db, landing, text } = this.route.snapshot.data.store;
    this.text = text;
    this.db = db;
    this.data = landing;
  }
}
