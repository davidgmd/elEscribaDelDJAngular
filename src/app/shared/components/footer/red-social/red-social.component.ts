import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-red-social',
  templateUrl: './red-social.component.html',
  styleUrls: ['./red-social.component.scss']
})
export class RedSocialComponent {
  @Input() icon = '';
  @Input() texto = '';
  @Input() link = '';
}
