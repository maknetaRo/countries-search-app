import { Component, Input } from '@angular/core';
import {
  FaIconComponent,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [FaIconComponent, FontAwesomeModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input({ required: true }) label: string = '';
  @Input() icon: any | null;
  @Input() role: string | undefined;
  @Input() ariaControls: string | undefined;
  @Input() ariaHaspopup: string | undefined;
  @Input() tabIndex: string | undefined;
  @Input() ariaExpended: boolean = false;
}
