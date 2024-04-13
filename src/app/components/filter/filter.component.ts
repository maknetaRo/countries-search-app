import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  @Input() label: string = '';
  @Input() chevronDown = faChevronDown;
  @Input() chevronUp = faChevronUp;
  @Input() role: string | undefined;
  @Input() ariaControls: string | undefined;
  @Input() ariaHaspopup: string | undefined;
  @Input() tabIndex: string | undefined;
  @Input() ariaExpended: boolean = false;

  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}
