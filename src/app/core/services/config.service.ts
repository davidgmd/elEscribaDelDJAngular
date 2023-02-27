import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ConfigInterface } from 'src/app/shared/models/configInterface';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor() {}
  configInicial = {
    idioma: 'es',
    menu: [
      { texto: 'page.menu.scribe', icono: 'history_edu' },
      { texto: 'page.menu.oceano_rolero', icono: 'library_books' },
      { texto: 'page.menu.others', icono: 'dynamic_feed' },
      { texto: 'page.menu.minigames', icono: 'sports_esports' },
    ],
    idiomas: [
      {
        texto: 'spanish',
        img: 'spanish.png',
        idioma: 'es',
      },
      { texto: 'english', img: 'english.png', idioma: 'en' },
    ],
    sonido: new BehaviorSubject(false),
  };

  getConfig(): ConfigInterface {
    return this.configInicial;
  }

  setIdioma(value: string): void {
    this.configInicial.idioma = value;
  }

  setSonido(value: boolean): void {
    this.configInicial.sonido.next(value);
  }
}
