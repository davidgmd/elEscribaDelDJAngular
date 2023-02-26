import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { ConfigService } from './core/services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private readonly translate: TranslateService, private readonly config: ConfigService, private titleService: Title){}
  title = 'elEscribaDelDJ';

  ngOnInit(): void {
    this.translate.use(this.config.getConfig().idioma);

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.translate.get('page.title').subscribe((res: string) => {
        this.titleService.setTitle(res);
      });
    });
  }
}
