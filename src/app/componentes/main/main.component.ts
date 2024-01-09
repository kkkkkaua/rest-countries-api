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

  valorInputSelect: string = '';
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

    if (
      this.campoSelect!.value.length > 8 ||
      this.campoSelect!.value === 'all'
    ) {
      this.service
        .listar(query)
        .subscribe((paises) => (this.listaPaises = paises));
    } else if (this.campoSelect!.value !== 'all') {
      this.service
        .listar(this.campoBusca!.value, this.campoSelect!.value)
        .subscribe((paises) => (this.listaPaises = paises));
    }
  }

  executaBuscaFeitaNoSelect(): void {
    if (
      this.valorInputSelect !== this.campoSelect!.value &&
      this.campoSelect!.value.length <= 8 &&
      this.campoSelect!.value !== 'all'
    ) {
      this.valorInputSelect = this.campoSelect!.value;

      this.service
        .listar(this.valorInputSelect)
        .subscribe((paises) => (this.listaPaises = paises));
    }

    if (
      this.campoBusca!.value.trim() !== '' &&
      this.campoSelect!.value !== 'all' &&
      this.campoSelect!.value.length <= 8
    ) {
      this.service
        .listar(this.campoBusca!.value, this.campoSelect!.value)
        .subscribe((paises) => (this.listaPaises = paises));
    }

    if (this.campoSelect!.value === 'all')
      if (this.campoBusca!.value.trim() === '')
        this.service
          .listar()
          .subscribe((paises) => (this.listaPaises = paises));
      else
        this.service
          .listar(this.campoBusca!.value)
          .subscribe((paises) => (this.listaPaises = paises));
  }
}
