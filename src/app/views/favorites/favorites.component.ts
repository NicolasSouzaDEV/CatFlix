<<<<<<< HEAD:src/app/views/favorites/favorites.component.ts
import { cat, favoriteCat } from '../../interface/cat';
=======
import { cat, favoriteCat } from './../interface/cat';
>>>>>>> 980f584d1d78ac5a27362cf7d9b382f34ba83024:src/app/favorites/favorites.component.ts
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { CatApiService } from '../../service/cat-api.service';

@Component({
  selector: 'favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.sass']
})
export class FavoritesComponent implements OnInit {

  favCats: favoriteCat[];

  constructor(private api: CatApiService) {}

  delFavCat(favId: number){
    this.api.delFavCats(favId).subscribe(()=> this.getFavCats())
  }

  getFavCats(){
    this.api.getFavCats().subscribe(favCats => {this.favCats=favCats; console.log(favCats)})
  }

  ngOnInit(): void {
    this.getFavCats()
  }

}
