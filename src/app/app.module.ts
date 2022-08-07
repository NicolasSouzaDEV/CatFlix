import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { CatsComponent } from './views/cats/cats.component';
import { FavoritesComponent } from './views/favorites/favorites.component';
import { DetailsComponent } from './views/details/details.component';

import { CatDescPipe } from './pipe/cat-desc.pipe';
import { MaterialModule } from './material';
import { LoginComponent } from './views/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    FavoritesComponent,
    DetailsComponent,
    CatDescPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
