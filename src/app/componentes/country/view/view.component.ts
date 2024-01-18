import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/country';
import { SharedDataService } from 'src/app/service/share-data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  pais!: Country;

  constructor(private sharedDataService: SharedDataService) {}

  montaStringBorders(): string {
    try {
      return this.pais.borders.join(', ');
    } catch {
      return 'no border country.';
    }
  }

  ngOnInit(): void {
    this.sharedDataService.paisAtual.subscribe((pais) => {
      this.pais = pais ?? this.pais;
    });
  }
}
