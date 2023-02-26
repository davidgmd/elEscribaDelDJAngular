import { Component } from '@angular/core';
import { redes_sociales } from 'src/app/const/socialnetwork';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  redes_sociales = redes_sociales;
}
