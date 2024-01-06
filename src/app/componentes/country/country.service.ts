import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Country } from 'src/app/country';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private readonly API = 'http://localhost:3000/countries';
  constructor(private http: HttpClient) {}

  listar(): Observable<Country[]> {
    return this.http.get<Country[]>(this.API);
  }
}
