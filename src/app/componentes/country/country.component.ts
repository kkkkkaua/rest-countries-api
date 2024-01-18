import { Component, Input } from '@angular/core';
import { Country } from 'src/app/country';
import { SharedDataService } from 'src/app/service/share-data.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent {
  @Input() pais!: Country;

  constructor(private sharedDataService: SharedDataService) {}

  fuiClicado() {
    this.sharedDataService.enviarPais(this.pais);
  }
}
