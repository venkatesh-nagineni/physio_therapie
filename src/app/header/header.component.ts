import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('cookieLaw') cookieLawEl: any;
  cookieLawSeen: boolean;

  constructor() {

  }

  ngOnInit() {
    this.cookieLawSeen = this.cookieLawEl.cookieLawSeen;
  }

  dismiss(): void {
    this.cookieLawEl.dismiss();
  }

}
