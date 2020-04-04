import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html', 
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  constructor(public translate: TranslateService,) {  translate.addLangs(['en', 'fr']);
  if (localStorage.getItem('locale')) {
    const browserLang = localStorage.getItem('locale');
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  } else {
    localStorage.setItem('locale', 'en');
    translate.setDefaultLang('en');
  }
}
changeLang(language: string) {
  localStorage.setItem('locale', language);
  this.translate.use(language);
}
  ngOnInit() {
  }

}
