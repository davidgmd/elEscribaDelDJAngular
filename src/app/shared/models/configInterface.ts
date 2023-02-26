export class OpcionesMenu {
  texto: string = '';
  icono: string = '';
}

export interface ConfigInterface {
  menu: Array<OpcionesMenu>;
  idioma: string;
}
