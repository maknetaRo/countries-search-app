import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-country-card',
  standalone: true,
  imports: [],
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.scss',
})
export class CountryCardComponent {
  @Input({ required: true }) countryName: string | undefined;
  @Input({ required: true }) src: string | undefined;
  @Input() population: number | undefined;
  @Input() region: string | undefined;
  @Input() capitalCity: string | undefined;
}
