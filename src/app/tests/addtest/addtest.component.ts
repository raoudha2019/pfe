import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import {QcmService} from '../../service/qcm.service';
import {DomainService} from '../../service/domain.service';
import {TestsService} from '../../service/tests.service';

import { Domain } from 'src/app/model/Domain';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { QcmAddComponent, DialogData } from 'src/app/qcm/qcm-add/qcm-add.component';
import { TranslateService } from '@ngx-translate/core';
import { MatSnackBarComponent } from 'src/app/mat-snack-bar/mat-snack-bar.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addtest',
  templateUrl: './addtest.component.html',
  styleUrls: ['./addtest.component.css']
})
export class AddtestComponent implements OnInit {
  messageForm: FormGroup;
  typesOfShoes: string[] 
  local_data: any;
  domain :Domain = new Domain();
  domaines: Domain[];
  domain_id : number;
  selectedValue: number;

  DomainControl = new FormControl('', [
    Validators.required,
    Validators.nullValidator,

  ]);
  searchUserForm: any;
  dat1: any={};

  constructor( private qcmService: QcmService,public translate: TranslateService,private snackBar: MatSnackBarComponent,
    public dialogRef: MatDialogRef<QcmAddComponent>,public dialog: MatDialog,private actRoute: ActivatedRoute,
    private testsService:TestsService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private changeDetectorRefs: ChangeDetectorRef,
    private domainservice: DomainService,private fb: FormBuilder,private formBuilder: FormBuilder) 
       {

        this.messageForm = this.formBuilder.group({
          //domain: ['', Validators.required],
        })


        console.log(data);
        this.local_data = {...data};
        
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
            
          onSubmit(){

            this.qcmService.getbyDomain(this.selectedValue).subscribe(data => {
              this.local_data.data = data;
              console.log(data);
              const dataaa : any = data;
              console.log("fffffff");
              console.log(dataaa,"eeeeeeeee");

            })

          
            //******* */
            
              /* this.qcmService.getAllQcms().subscribe(data => {
                 this.local_data.data = data;
             })
             //**********************getQcmByDomain */
             
             this.qcmService.getbyDomain(this.selectedValue).subscribe(data => {
               this.local_data.data = data;
                   console.log(this.selectedValue);
             })
             console.log("1111111111");

             //console.log(this.data2);
               //**********getDomain *************** */
               this.domainservice.getAllDomains().subscribe(data => {
                 this.domaines = data;
             }) 
             //********** searchform ************ */
             this.searchUserForm = this.fb.group({
               userType: new FormControl('')
             });
             //*****affichagge***********
             this.refresh();
                 this.qcmService.getbyDomain(this.selectedValue).subscribe(data => {
                   this.dat1.data = data;
               }) 
             //  this.dataSource.paginator = this.paginator;
               
             
             
             
          }
          allTest(){
//****************** */
this.testsService.getAllRoles().subscribe(data => {
  this.local_data.data = data;
  console.log( data ,"2222222222222")
  })
          }
          
          ngOnInit() {
           /* this.qcmService.getAllQcms().subscribe(data => {
              this.local_data.data = data;
          })
          //**********************getQcmByDomain */
          
        /*   this.qcmService.getbyDomain(this.domain_id).subscribe(data => {
            this.local_data.data = data;
            console.log(data);
            console.log(this.selectedValue);
          })
          
            //**********getDomain *************** */
           this.domainservice.getAllDomains().subscribe(data => {
              this.domaines = data;
          }) 
          //********** searchform ************ */
          /*this.searchUserForm = this.fb.group({
            userType: new FormControl('')
          });
          //****affichagge***********
          this.refresh();
              this.qcmService.getbyDomain(this.domain_id).subscribe(data => {
                this.dat1.data = data;
            }) 
            console.log(this.dat1
              );
            //this.dataSource.paginator = this.paginator;
            
          
          */
          }
          refresh() {
            this.qcmService.getbyDomain(this.domain_id).subscribe((res) => {
              this.dat1.data  = res;
              this.changeDetectorRefs.detectChanges();
            });
          }


}
