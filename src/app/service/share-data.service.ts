import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Country } from 'src/app/country';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private paisSource = new BehaviorSubject<Country | null>(null);
  paisAtual = this.paisSource.asObservable();

  enviarPais(pais: Country) {
    this.paisSource.next(pais);
    console.log(pais.borders);
  }
}
