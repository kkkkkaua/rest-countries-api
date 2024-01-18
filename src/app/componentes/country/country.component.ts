import { Component, Input } from '@angular/core';
import { Country } from 'src/app/country';
import { SharedDataService } from 'src/app/service/share-data.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent {
  @Input() pais: Country = {
    name: '',
    population: 0,
    region: '',
    capital: '',
    flags: {
      png: '',
    },
    nativeName: '',
    subregion: '',
    topLevelDomain: '',
    demonym: '',
    numericCode: ''
  };

  constructor(private sharedDataService: SharedDataService) {}

  fuiClicado() {
    this.sharedDataService.enviarPais(this.pais);
  }
}
