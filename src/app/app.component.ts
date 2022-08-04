import { CatApiService } from './cat-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'Catflix';

  constructor(private api: CatApiService) {}

  ngOnInit() {
    let getSave = localStorage.getItem('user');
    if (getSave == null) {
      this.api.user = getSave;
    }
    console.log(`usuário ${this.api.user} carregado`);
  }
}
