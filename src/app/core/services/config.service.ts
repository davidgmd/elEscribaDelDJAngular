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
        { texto: 'page.menu.scribe', icono: 'history_edu' },
        { texto: 'page.menu.oceano_rolero', icono: 'library_books' },
        { texto: 'page.menu.others', icono: 'dynamic_feed' },
        { texto: 'page.menu.minigames', icono: 'sports_esports' },
      ],
    };
  }

  setConfig() {}
}
