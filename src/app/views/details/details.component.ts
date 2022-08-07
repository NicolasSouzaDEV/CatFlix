
import { cat } from '../../interface/cat';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatApiService } from '../../service/cat-api.service';

@Component({
  selector: 'catdetails',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {
  idCatDetails: cat

  constructor(private api: CatApiService, private route: ActivatedRoute, private router: Router) { }

  favCat(id: string){
    this.api.favCat(id).subscribe(postreturn => console.log(postreturn))
  }

  ngOnInit(): void {
    this.api.getCatbyId(this.route.snapshot.params['id']).subscribe(idCatDetails=>{this.idCatDetails=idCatDetails; console.log(idCatDetails)})
  }

}
