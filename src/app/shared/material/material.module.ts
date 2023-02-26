import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import  {MatButtonModule} from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'

const materialModules = [
  MatProgressSpinnerModule,
  MatButtonModule,
  MatIconModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialModules
  ],
  exports:[materialModules]
})
export class MaterialModule { }
