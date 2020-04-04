import {Input, Component, OnInit,Output, EventEmitter } from '@angular/core';
import {UtilisateurService} from '../service/utilisateur.service';
import { FormBuilder,FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentification.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  messageForm: FormGroup;
  submitted = false;
  success = false;
  wrong=false;
  
  usernameControl = new FormControl('', [
    Validators.required,
    Validators.nullValidator,

  ]);
  passwordControl = new FormControl('', [
    Validators.required,
    Validators.nullValidator,

  ]);
  constructor(private formBuilder: FormBuilder,
    private service: UtilisateurService,
    private router : Router,private authenticationService: AuthenticationService) { 

   //****************** FormmBuilder ****************/
      this.messageForm = this.formBuilder.group({
    firstname: ['', Validators.required],
    password: ['', Validators.required],    
   })
  
    //*************************** uthenticationService*****************/
    if (this.authenticationService.currentUserValue) { 
      this.router.navigate(["dash"]);
  }
   
 }


 redirecttt(){
  setTimeout( ()=>{
    this.router.navigate(["dash"])
  }
  
  , 500)
}


onSubmit() {
  this.submitted = true;

  if (this.messageForm.invalid  ) {
   
    return;
  }
  
 
  this.authenticationService.login(this.messageForm.value).pipe(first()).subscribe(
    
    data=>{
      if(data) {
        
        console.log("user exists");
        this.success = true;
        
       
      }
      else  {console.log("user not found")
             this.wrong=true;
    }
       
     
     },
     err => {
       console.log("error sending data")
     },
     ()=>{
       console.log("data sent")
     }
  
    )
   }

  ngOnInit() {
  }


}