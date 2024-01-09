import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country/country.service';
import { Country } from 'src/app/country';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  listaPaises: Array<Country> = [];

  valorInputSearch: string = '';
  campoSelect: HTMLSelectElement | null = null;
  campoBusca: HTMLInputElement | null = null;

  constructor(private service: CountryService) {}

  ngOnInit(): void {
    this.service
      .listar()
      .subscribe((listaPaises) => (this.listaPaises = listaPaises));

    this.campoSelect = document.querySelector('select')!;
    this.campoBusca = document.querySelector('.input')!;
  }

  executaBuscaFeitaNoCampo(): void {
    let query = this.campoBusca!.value;
    this.service
      .listar(query)
      .subscribe((paises) => (this.listaPaises = paises));
  }

  executaBuscaFeitaNoSelect(): void {
    if (
      this.valorInputSearch != this.campoSelect!.value &&
      this.campoSelect!.value.length <= 8
    ) {
      this.valorInputSearch = this.campoSelect!.value;

      this.service
        .listar(this.valorInputSearch)
        .subscribe((paises) => (this.listaPaises = paises));
    }
  }
}
