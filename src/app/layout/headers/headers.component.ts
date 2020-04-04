import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ViewChild, ElementRef } from '@angular/core';
import { AuthenticationService } from '../../service/authentification.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {

  @ViewChild('selectpicker', { static: true }) selectPicker: ElementRef;

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router, private authenticationService: AuthenticationService, public translate: TranslateService,
  ) {
    translate.addLangs(['en', 'fr']);
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
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
  ngOnInit() { }
  toggleSideBar() {

    this.toggleSideBarForMe.emit();

    setTimeout(() => {

      window.dispatchEvent(

        new Event('resize')

      );

    }, 300);

  }

}