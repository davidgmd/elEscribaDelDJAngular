import { Injectable } from '@angular/core';
import { ConfigInterface } from 'src/app/shared/models/configInterface';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor() {}

  getConfig(): ConfigInterface {
    return {
      idioma: 'es',
      menu: [
        { texto: 'elescriba', icono: 'history_edu' },
        { texto: 'juanmaverso', icono: 'library_books' },
        { texto: 'otros', icono: 'dynamic_feed' },
        { texto: 'minijuegos', icono: 'sports_esports' },
      ],
    };
  }

  setConfig() {}
}
