import { LoginGuard } from './guard/login.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatsComponent } from './cats/cats.component';
import { DetailsComponent } from './details/details.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: 'full'},
  {path: "login", component: LoginComponent},
  {path: "cats", component: CatsComponent, canActivate: [LoginGuard]},
  {path: "favorites", component: FavoritesComponent, canActivate: [LoginGuard]},
  {path: "details/:id", component: DetailsComponent, canActivate: [LoginGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
