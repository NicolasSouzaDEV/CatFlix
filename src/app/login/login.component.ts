import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CatApiService } from '../cat-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  formulary: FormGroup

  constructor(private api: CatApiService, private formBuilder: FormBuilder) { }
  
  setUsername(username: string){
    this.api.setUsername(username)
  }

  ngOnInit(): void {
    this.formulary = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    })
  }

}
