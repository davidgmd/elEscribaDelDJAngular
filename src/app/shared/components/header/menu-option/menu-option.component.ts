import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-option',
  templateUrl: './menu-option.component.html',
  styleUrls: ['./menu-option.component.scss'],
})
export class MenuOptionComponent {
  @Input() texto = '';
  @Input() icono = '';

  reproducirSonido(): void {
    console.log('sonido menu');
  }
}
