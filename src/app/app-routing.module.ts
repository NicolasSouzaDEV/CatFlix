import { PgnotfoundComponent } from './views/pgnotfound/pgnotfound.component';
import { LoginGuard } from './guard/login.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatsComponent } from './views/cats/cats.component';
import { DetailsComponent } from './views/details/details.component';
import { FavoritesComponent } from './views/favorites/favorites.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'cats', component: CatsComponent, canActivate: [LoginGuard] },
  {
    path: 'favorites',
    component: FavoritesComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    canActivate: [LoginGuard],
  },
  {
    path: "**",
    component: PgnotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
