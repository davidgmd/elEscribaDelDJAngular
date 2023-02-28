import { BehaviorSubject } from 'rxjs';
import { LanguageInterface } from './languageInterface';

export class OpcionesMenu {
  texto = '';
  icono = '';
  ruta = '';
  audio = '';
}

export interface ConfigInterface {
  menu: Array<OpcionesMenu>;
  idioma: string;
  idiomas: Array<LanguageInterface>;
  sonido: BehaviorSubject<boolean>;
}
