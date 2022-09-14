import { CatApiService } from './service/cat-api.service';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'Catflix';

  

  constructor(private api: CatApiService) {}

  leaveUsername() {
    this.api.leaveUsername();
  }

  checkUserLogin() {
    return this.api.checkUserLogin();
  }

  getUsername() {
    return this.api.user;
  }

  ngOnInit() {}
}
