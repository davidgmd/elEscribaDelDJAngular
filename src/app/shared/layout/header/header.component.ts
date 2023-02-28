import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConfigService } from 'src/app/core/services/config.service';
import { SoundService } from 'src/app/core/services/sound.service';
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
  icono = 'volume_off';

  subscripcion!: Subscription;

  constructor(
    private readonly config: ConfigService,
    private readonly navegar: Router,
    private readonly sonido: SoundService
  ) {}
  ngOnInit(): void {
    this.opcionesMenu = this.config.getMenu();
    this.idiomas = this.config.getListaIdiomas();

    this.subscripcion = this.config.getSonido().subscribe((valor) => {
      this.cambiarIcono();
    });
  }

  volverInicio() {
    this.navegar.navigate(['']);
    console.log('inicio');
  }

  activarODesactivarSonido() {
    this.cambiarIcono();
    this.config.setSonido(!this.config.getSonido().value);
  }

  cambiarIcono() {
    if (this.config.getSonido().value) {
      this.icono = SoundIcon.on;
    } else {
      this.icono = SoundIcon.off;
    }
  }

  reproducirSonido() {
    this.sonido.sonidoDing();
  }

  ngOnDestroy(): void {
    this.subscripcion.unsubscribe();
  }
}
