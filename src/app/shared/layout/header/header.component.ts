import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/core/services/config.service';
import { OpcionesMenu } from '../../models/configInterface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  opcionesMenu = new Array<OpcionesMenu>();

  constructor(
    private readonly obtenerParams: ActivatedRoute,
    private readonly config: ConfigService,
    private readonly navegar: Router
  ) {}
  ngOnInit(): void {
    this.obtenerParams.params.subscribe((params) => {
      this.opcionesMenu = this.config.getConfig().menu;
    });
  }

  volverInicio() {
    this.navegar.navigate(['']);
    console.log('inicio');
  }

  reproducirSonido() {
    console.log('sonido');
  }
}
