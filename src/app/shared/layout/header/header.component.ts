import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConfigService } from 'src/app/core/services/config.service';
import { OpcionesMenu } from '../../models/configInterface';
import { LanguageInterface } from '../../models/languageInterface';

enum SoundIcon {
  on = 'volume_up',
  off = 'volume_off',
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  opcionesMenu = new Array<OpcionesMenu>();
  idiomas = new Array<LanguageInterface>();
  sonidoDesactivado = true;
  icono = 'volume_off';

  subscripcion!: Subscription;

  constructor(
    private readonly config: ConfigService,
    private readonly navegar: Router
  ) {}
  ngOnInit(): void {
    this.opcionesMenu = this.config.getMenu();
    this.idiomas = this.config.getListaIdiomas();

    this.subscripcion = this.config.getSonido().subscribe((valor) => {
      this.sonidoDesactivado = valor;
      this.activarODesactivarSonido();
    });
  }

  volverInicio() {
    this.navegar.navigate(['']);
    console.log('inicio');
  }

  activarODesactivarSonido() {
    if (this.sonidoDesactivado) {
      this.icono = SoundIcon.on;
      this.sonidoDesactivado = false;
    } else {
      this.icono = SoundIcon.off;
      this.sonidoDesactivado = true;
    }
  }

  reproducirSonido() {
    console.log('sonido');
  }

  ngOnDestroy(): void {
    this.subscripcion.unsubscribe();
  }
}
