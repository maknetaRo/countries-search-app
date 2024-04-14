import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import countries from '../../../assets/data.json';

@Component({
  selector: 'app-country-page',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.scss',
})
export class CountryPageComponent {
  countryName: string | null = null;
  allCountries = countries;
  countryData: any;
  src: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.countryName = params['name'];
      console.log(this.countryName);
    });
    this.getCountryData();
    console.log(this.countryData.currencies);
  }

  getCountryData() {
    this.countryData = this.allCountries.find(
      (country) => country.name === this.countryName
    );
  }
}
