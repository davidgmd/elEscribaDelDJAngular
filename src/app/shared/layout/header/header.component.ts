import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
export class HeaderComponent implements OnInit {
  opcionesMenu = new Array<OpcionesMenu>();
  idiomas = new Array<LanguageInterface>();
  sonidoDesactivado = true;
  icono = 'volume_off';

  constructor(
    private readonly obtenerParams: ActivatedRoute,
    private readonly config: ConfigService,
    private readonly navegar: Router
  ) {}
  ngOnInit(): void {
    this.obtenerParams.params.subscribe((params) => {
      this.opcionesMenu = this.config.getConfig().menu;
      this.idiomas = this.config.getConfig().idiomas;
      this.config.getConfig().sonido.subscribe((valor) => {
        this.sonidoDesactivado = valor;
        this.activarODesactivarSonido();
      });
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
}
