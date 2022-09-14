import { cat, favoriteCat } from '../interface/cat';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatApiService {
  header = new HttpHeaders({
    'x-api-key': 'e5665fe2-b5bc-4862-a748-36f43b442c6b',
    'content-type': 'application/json',
  });

  user: string | null = localStorage.getItem('user');

  constructor(private client: HttpClient, private router: Router) {}
  getCats(): Observable<cat[]> {
    return this.client.get<cat[]>(
      `https://api.thecatapi.com/v1/images/search?limit=32&has_breeds=1`,
      { headers: this.header }
    );
  }

  getCatbyId(id: string): Observable<cat> {
    return this.client.get<cat>(`https://api.thecatapi.com/v1/images/${id}`);
  }

  favCat(id: string): Observable<void> {
    return this.client.post<void>(
      'https://api.thecatapi.com/v1/favourites',
      { image_id: id, sub_id: this.user },
      { headers: this.header }
    );
  }

  getFavCats(): Observable<favoriteCat[]> {
    return this.client.get<favoriteCat[]>(
      `https://api.thecatapi.com/v1/favourites?sub_id=${this.user}`,
      { headers: this.header }
    );
  }

  delFavCats(favId: number): Observable<void> {
    return this.client.delete<void>(
      `https://api.thecatapi.com/v1/favourites/${favId}`,
      { headers: this.header }
    );
  }

  setUsername(username: string) {
    this.user = username;
    localStorage.setItem('user', username);
    console.log(`usuário ${username} salvo`);
  }

  leaveUsername() {
    this.user = null;
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  checkUserLogin() {
    return this.user != null;
  }
}
