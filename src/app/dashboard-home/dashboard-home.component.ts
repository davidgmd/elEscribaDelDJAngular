import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfigService } from '../core/services/config.service';
import { InitialDialogComponent } from '../shared/components/dialog/initial-dialog/initial-dialog.component';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss'],
})
export class DashboardHomeComponent implements OnInit {
  constructor(
    public readonly dialog: MatDialog,
    private readonly config: ConfigService
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('aceptado') !== 'true') {
      this.dialog
        .open(InitialDialogComponent)
        .afterClosed()
        .subscribe((comprobacion) => {
          if (comprobacion) {
            this.config.setSonido(comprobacion);
          } else {
            this.config.setSonido(false);
          }

          localStorage.setItem('aceptado', 'true');
        });
    }
  }
}
