import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { FilterComponent } from '../filter/filter.component';
import { CountryCardComponent } from '../country-card/country-card.component';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [SearchComponent, FilterComponent, CountryCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
