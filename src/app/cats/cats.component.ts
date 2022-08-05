import { cat } from './../interface/cat';
import { Component, OnInit } from '@angular/core';
import { CatApiService } from '../cat-api.service';

@Component({
  selector: 'cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.sass']
})
export class CatsComponent implements OnInit {

  catList: cat[];

  constructor(private api: CatApiService) { }

  getNewCats(){
    this.api.getCats().subscribe(catList => {this.catList = catList})
  }

  favCat(id: string){
    this.api.favCat(id).subscribe(postreturn => console.log(postreturn))
  }

  ngOnInit(): void {
    this.getNewCats()
  }

}
