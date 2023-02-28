import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RutaService } from 'src/app/core/services/ruta.service';
import { SoundService } from 'src/app/core/services/sound.service';

@Component({
  selector: 'app-menu-option',
  templateUrl: './menu-option.component.html',
  styleUrls: ['./menu-option.component.scss'],
})
export class MenuOptionComponent implements OnInit, OnDestroy {
  @Input() texto = '';
  @Input() icono = '';
  @Input() ruta = '';
  @Input() audio = '';

  activo = '';
  subscripcion!: Subscription;

  constructor(
    private readonly navegador: Router,
    private readonly obsActivo: RutaService,
    private readonly sonido: SoundService
  ) {}

  ngOnInit() {
    this.subscripcion = this.obsActivo.getActivo().subscribe((activoActual) => {
      this.activo = activoActual;
    });
  }

  reproducirSonido(audio: string): void {
    this.sonido.sonidoDing();
  }

  navigateTo(ruta: string) {
    this.obsActivo.setActivoActual(ruta);
    this.navegador.navigate([ruta]);
  }

  ngOnDestroy(): void {
    this.subscripcion.unsubscribe();
  }
}
