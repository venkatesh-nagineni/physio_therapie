import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }

  /* openUserLogin() {
    const dialogRef = this.dialog.open(UserloginComponent, { hasBackdrop: false, panelClass: 'dialogclass' });
    this.disableMenu = true;
    dialogRef.afterClosed().subscribe(result => {
      this.disableMenu = false;
      if (result) {
        if (result.valid === true) {
          this.adminSection = true;
          this.homeSection = false;
          this.onlineSection = false;
          this.disableMenu = false;
        }
      }
    });
  } */


}

