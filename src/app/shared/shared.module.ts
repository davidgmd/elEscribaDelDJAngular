import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './layout/header/header.component';
import { MenuOptionComponent } from './components/header/menu-option/menu-option.component';

const sharedComponents = [HeaderComponent, MenuOptionComponent];

@NgModule({
  declarations: [sharedComponents],
  imports: [CommonModule, MaterialModule],
  exports: [sharedComponents],
})
export class SharedModule {}
