import { Component, OnDestroy, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ConfigService } from './core/services/config.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private readonly translate: TranslateService,
    private readonly config: ConfigService,
    private titleService: Title
  ) {}
  title = 'elEscribaDelDJ';
  subscripcion!: Subscription;
  subscripcionTitulo!: Subscription;

  ngOnInit(): void {
    this.translate.use(this.config.getIdiomaActual());

    this.subscripcion = this.translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        this.subscripcionTitulo = this.translate
          .get('page.title')
          .subscribe((res: string) => {
            this.titleService.setTitle(res);
          });
      }
    );
  }

  ngOnDestroy(): void {
    this.subscripcion.unsubscribe();
    this.subscripcionTitulo.unsubscribe();
  }
}
