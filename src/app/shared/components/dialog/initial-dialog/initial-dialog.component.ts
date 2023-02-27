import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-initial-dialog',
  templateUrl: './initial-dialog.component.html',
  styleUrls: ['./initial-dialog.component.scss'],
})
export class InitialDialogComponent {
  constructor(private readonly ref: MatDialogRef<InitialDialogComponent>) {}

  cerrarDialog(confirmacion: boolean): void {
    this.ref.close(confirmacion);
  }
}
