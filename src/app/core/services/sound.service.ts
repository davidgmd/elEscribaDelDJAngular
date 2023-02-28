import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root',
})
export class SoundService {
  subscripcion!: Subscription;

  constructor(private readonly config: ConfigService) {}

  sonidoDing() {
    this.subscripcion = this.config.getSonido().subscribe((activo) => {
      if (activo) {
        const audioAReproducir = new Audio(`assets/sounds/ding.wav`);
        audioAReproducir.play();
      }
      this.subscripcion.unsubscribe();
    });
  }
}
