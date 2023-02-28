import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { defaultLanguages } from 'src/app/const/defaultLanguages';
import { defaultMenuOptions } from 'src/app/const/defaultMenuOptions';
import {
  ConfigInterface,
  OpcionesMenu,
} from 'src/app/shared/models/configInterface';
import { LanguageInterface } from 'src/app/shared/models/languageInterface';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor() {}
  configInicial = {
    idioma: 'es',
    menu: defaultMenuOptions,
    sonido: new BehaviorSubject(false),
    idiomas: defaultLanguages,
  };

  getIdiomaActual(): string {
    return this.configInicial.idioma;
  }

  getSonido(): BehaviorSubject<boolean> {
    return this.configInicial.sonido;
  }

  getMenu(): Array<OpcionesMenu> {
    return this.configInicial.menu;
  }

  getListaIdiomas(): Array<LanguageInterface> {
    return this.configInicial.idiomas;
  }

  setIdioma(value: string): void {
    this.configInicial.idioma = value;
  }

  setSonido(value: boolean): void {
    this.configInicial.sonido.next(value);
  }
}
