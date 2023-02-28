import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RutaService {
  activoActual = new BehaviorSubject<string>('');

  constructor() {}

  getActivo(): BehaviorSubject<string> {
    return this.activoActual;
  }

  setActivoActual(activo: string): void {
    this.activoActual.next(activo);
  }
}
