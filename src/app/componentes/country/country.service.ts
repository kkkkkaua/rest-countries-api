import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from 'src/app/country';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private readonly API = 'http://localhost:3000/countries';
  constructor(private http: HttpClient) {}

  listar(nome?: string, regiao?: string): Observable<Country[]> {
    let params: HttpParams = new HttpParams();
    if (nome) params = params.set('q', nome);
    if (regiao) params = params.set('region', regiao);

    return this.http.get<Country[]>(this.API, { params });
  }
}
