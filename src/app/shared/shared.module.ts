import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './layout/header/header.component';
import { MenuOptionComponent } from './components/header/menu-option/menu-option.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RedSocialComponent } from './components/footer/red-social/red-social.component';
import { TranslateModule } from '@ngx-translate/core';
import { InitialDialogComponent } from './components/dialog/initial-dialog/initial-dialog.component';

const sharedComponents = [HeaderComponent, MenuOptionComponent, FooterComponent, RedSocialComponent, InitialDialogComponent];

@NgModule({
  declarations: [sharedComponents],
  imports: [CommonModule, MaterialModule, TranslateModule],
  exports: [sharedComponents, TranslateModule],
})
export class SharedModule {}
