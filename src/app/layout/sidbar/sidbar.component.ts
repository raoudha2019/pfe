import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sidbar',
  templateUrl: './sidbar.component.html',
  styleUrls: ['./sidbar.component.css']
})
export class SidbarComponent implements OnInit {

  
  //****************Variables **************** */

  ActionRole = false;
  ActionEmploye = false;
  ActionUser=false;
  ActionMicro=false;
  ActionClient=false;

//***************************Constructor ********** */
  constructor(private router: Router,public translate: TranslateService,
  ) 
  {  translate.addLangs(['en', 'fr']);  
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

 
  
  
  

  ngOnInit() {}


  }





