import { Component, Input } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { FilterComponent } from '../filter/filter.component';
import { CountryCardComponent } from '../country-card/country-card.component';
import { ICountry, ICountries } from '../../models/country.interface';
import countries from '../../../assets/data.json';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [
    SearchComponent,
    FilterComponent,
    CountryCardComponent,
    CountryCardComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  @Input({ required: true }) countryName: string | undefined;
  @Input() capital: string | undefined;
  @Input({ required: true }) src: string | undefined;
  @Input() region: string | undefined;
  @Input() population: number | undefined;

  allCountries = countries;

  ngOnInit() {
    console.log(this.allCountries);
    console.log(this.allCountries[0].flags.svg);
  }
}
