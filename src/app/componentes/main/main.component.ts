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

  constructor(private service: CountryService) {}

  ngOnInit(): void {
    this.service
      .listar()
      .subscribe((listaPaises) => (this.listaPaises = listaPaises));
  }
}
