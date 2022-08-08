import { cat, favoriteCat } from '../../interface/cat';
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
  isDeleting: boolean = false

  constructor(private api: CatApiService) {}

  delFavCat(favId: number){ 
    this.api.delFavCats(favId).subscribe(()=> this.getFavCats())
    this.isDeleting = true
  }

  getFavCats(){
    this.api.getFavCats().subscribe(favCats => {this.favCats=favCats; console.log(favCats); this.isDeleting=false})
  }

  ngOnInit(): void {
    this.getFavCats()
  }

}
