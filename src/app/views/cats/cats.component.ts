import { cat } from '../../interface/cat';
import { Component, HostListener, OnInit } from '@angular/core';
import { CatApiService } from '../../service/cat-api.service';

@Component({
  selector: 'cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.sass'],
})
export class CatsComponent implements OnInit {
  catList: cat[] = [];
  currentSubscription = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
      console.log('aiaiai');
      !this.currentSubscription ? this.getNewCats() : null;
    }
  }

  constructor(private api: CatApiService) {}

  getNewCats() {
    this.currentSubscription = true;
    this.api.getCats().subscribe((catList) => {
      this.catList.push(...catList);
      this.currentSubscription = false
    });
  }

  favCat(id: string) {
    this.api.favCat(id).subscribe((postreturn) => console.log(postreturn));
  }

  ngOnInit(): void {
    this.getNewCats();
  }
}
