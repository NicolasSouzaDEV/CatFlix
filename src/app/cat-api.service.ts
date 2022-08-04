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

  user: string = "catLover";

  constructor(private client: HttpClient) {}
  getCats(): Observable<{}[]> {
    return this.client.get<{}[]>(
      `https://api.thecatapi.com/v1/images/search?limit=20&has_breeds=1`,
      { headers: this.header }
    );
  }

  getCatbyId(id: string): Observable<{}[]> {
    return this.client.get<{}[]>(`https://api.thecatapi.com/v1/images/${id}`);
  }

  favCat(id: string): Observable<void> {
    return this.client.post<void>(
      'https://api.thecatapi.com/v1/favourites',
      { image_id: id, sub_id: this.user },
      { headers: this.header }
    );
  }

  getFavCats(): Observable<{}[]> {
    return this.client.get<{}[]>(
      `https://api.thecatapi.com/v1/favourites?limit=10&sub_id=${this.user}`,
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
  }
}
