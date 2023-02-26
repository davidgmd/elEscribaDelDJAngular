import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InitialDialogComponent } from '../shared/components/dialog/initial-dialog/initial-dialog.component';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {
  constructor(public readonly dialog: MatDialog){}

  ngOnInit(): void {
    this.dialog.open(InitialDialogComponent);
  }
}
