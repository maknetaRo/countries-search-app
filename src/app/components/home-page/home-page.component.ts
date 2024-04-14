import { Component, Input } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { FilterComponent } from '../filter/filter.component';
import { CountryCardComponent } from '../country-card/country-card.component';
import { ICountry, ICountries } from '../../models/country.interface';
import countries from '../../../assets/data.json';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [
    SearchComponent,
    FilterComponent,
    CountryCardComponent,
    CountryCardComponent,
    ReactiveFormsModule,
    RouterLink,
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

  keyword = new FormControl('');
  allCountries = countries;
  filteredCountries = countries;

  countryFilter() {
    const param = this.keyword.value?.toLowerCase() || '';
    console.log(param);
    this.filteredCountries = this.allCountries.filter((country) => {
      const match = country.name.toLowerCase().includes(param);
      return match;
    });
  }
}
