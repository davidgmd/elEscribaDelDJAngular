import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from 'src/app/core/services/config.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
})
export class LanguageComponent {
  @Input() texto = '';
  @Input() bandera = '';
  @Input() idioma = '';

  constructor(
    private readonly traductor: TranslateService,
    private readonly config: ConfigService
  ) {}

  cambiarIdioma(idioma: string): void {
    this.config.setIdioma(idioma);
    this.traductor.use(idioma);
  }
}
