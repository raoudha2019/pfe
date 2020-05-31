import { Component,ViewChild, Inject, Injectable, ViewEncapsulation, ChangeDetectorRef, VERSION, ElementRef, OnInit } from '@angular/core';
import {NgForm, FormBuilder, FormGroup, FormControl, Validators, FormArray, AbstractControl} from '@angular/forms';
import { ToolbarService, LinkService, ImageService, HtmlEditorService,
  RichTextEditorComponent, TableService, MarkdownEditorService,  EditorMode, MarkdownFormatter,
   ResizeService, FormatModel } from '@syncfusion/ej2-angular-richtexteditor';
   import styleObj from '../../dialog/style';
   import {COMMA, ENTER} from '@angular/cdk/keycodes';

import { TranslateService } from '@ngx-translate/core';
import { AddUserComponent } from 'src/app/users/user-add/add-user.component';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, ThemePalette, MatAutocompleteSelectedEvent, MatChipInputEvent, MatSnackBar } from '@angular/material';
import { DomainService } from '../../service/domain.service';
import { MatSnackBarComponent } from 'src/app/mat-snack-bar/mat-snack-bar.component';
import { QcmService } from 'src/app/service/qcm.service';
import {SelectionModel} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {BehaviorSubject, from, Observable} from 'rxjs';
import { createElement, KeyboardEventArgs } from '@syncfusion/ej2-base';
import * as Marked from 'marked';
import { ToolbarModule, Item } from '@syncfusion/ej2-angular-navigations';
import {Domain} from '../../model/Domain';
import {Qcm1} from '../../model/Qcm1';
import { DialogComponent, DialogData } from 'src/app/dialog/dialog.component';
import {Question_Body} from '../../model/Question_Body'
import { ResponseType } from '@angular/http';
import { TestComponent } from 'src/app/test/test.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ChecklistDatabase, TodoItemFlatNode, TodoItemNode } from 'src/app/domain/add-domain/add-domain.component';
export interface RoleData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-update-qcm',
  templateUrl: './update-qcm.component.html',
  styleUrls: ['./update-qcm.component.css'],
  providers: [ToolbarService, LinkService, ImageService, MarkdownEditorService, TableService,ChecklistDatabase,
    ResizeService,],
})
export class UpdateQcmComponent implements OnInit {
  
  messageForm: FormGroup;
  local_data:any;
  submitted = false;
  success = false;
  domain : Domain = new Domain();
  //listpriv = new Array<Permission>();
 
  
 /* config: any = {
    height: 250,
    theme: 'modern',
    // powerpaste advcode toc tinymcespellchecker a11ychecker mediaembed linkchecker help
    plugins: 'print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image imagetools link media template codesample table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists textcolor wordcount contextmenu colorpicker textpattern',
    toolbar: 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat',
    image_advtab: true,
    imagetools_toolbar: 'rotateleft rotateright | flipv fliph | editimage imageoptions',
   
    
  };
  searchUserForm: FormGroup;
  
  constructor( private qcmService: QcmService,
    public translate: TranslateService,private _snackBar: MatSnackBar,private snackBar: MatSnackBarComponent,
    public dialogRef: MatDialogRef<UpdateQcmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RoleData,
    private roleservice: DomainService,
    private fb: FormBuilder,private formBuilder: FormBuilder) 
  {}

  

onNoClick(): void {
  this.dialogRef.close();
}
onSubmit() {
      

if (this.messageForm.invalid ||this.domain == null) {
     //  alert("veuillez remplir1258 les champs obligatoires");
          console.log("********")        }
   
   this.qcmService.UpdateQcm(this.qcm,this.local_data.id).subscribe((domain) => {
     
     this.dialogRef.close();
     this.snackBar.openSnackBar("done!",'Close','red-snackbar');

     // alert("done!")
    // alert("vorte utilisateur est bien modifié!");

   },     
   (error) => {
     console.log("ERROR"+JSON.stringify(error))
   //  alert(error._body);   
   this.snackBar.openSnackBar(error._body,'Close','red-snackbar');

   });
 }
  qcm(qcm: any, id: any) {
    throw new Error("Method not implemented.");
  }
 ngOnInit() {
   this.roleservice.getAllDomains().subscribe(data => {
  this.domain = data;
}) 

this.searchUserForm = this.fb.group({
  userType: new FormControl('')
});

}*/
  selectedValue: number;
  qcm1:Qcm1=new Qcm1;
  qcmBody:Question_Body=new Question_Body;
  qcmBody1:any;
  domaines: Domain[];
  listrep :[{ "label":"" ,"correct":""}] ;
 
  questionData :any =  { question_body:{responses:[]} }; 

  animal: string;
  name: string;
 
  question_body : any ;
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = false;
//*************** */
userForm: FormGroup;
 //************ */


  separatorKeysCodes = [ENTER, COMMA];

  fruitCtrl = new FormControl();

  filteredFruits: Observable<any[]>;

//**************** */


 html = `    `;

    config: any = {
    height: 250,
    theme: 'modern',
    // powerpaste advcode toc tinymcespellchecker a11ychecker mediaembed linkchecker help
    plugins: 'print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image imagetools link media template codesample table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists textcolor wordcount contextmenu colorpicker textpattern',
    toolbar: 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat',
    image_advtab: true,
    imagetools_toolbar: 'rotateleft rotateright | flipv fliph | editimage imageoptions',
    templates: [
      { title: 'Test template 1', content: 'Test 1' },
      { title: 'Test template 2', content: 'Test 2' }
    ],
    content_css: [
      '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
      '//www.tinymce.com/css/codepen.min.css'
    ]
  };


questionControl = new FormControl('', [
    Validators.required,
    Validators.nullValidator,

  ]);
 
    responsesContr = new FormControl('', [
    Validators.required,
    Validators.nullValidator,

  ]);

  
  domainControl = new FormControl('', [
    Validators.required,
    Validators.nullValidator,

  ]);
  titleControl = new FormControl('', [
    Validators.required,
    Validators.nullValidator,

  ]);
  label = new FormControl('', [
    Validators.required,
    Validators.nullValidator,

  ]);
  correct = new FormControl('', [
    Validators.required,
    Validators.nullValidator,

  ]); 
  
  @ViewChild('fromRTE',{static:false})
    public rteObj: RichTextEditorComponent;
    //private rteEle: RichTextEditorComponent;

    public textArea: HTMLTextAreaElement;
    public mdsource: HTMLElement;
    public tools: ToolbarModule = {
        items: ['Bold', 'Italic', 'StrikeThrough', '|',
            'Formats', 'OrderedList', 'UnorderedList','SuperScript', 'SubScript', '|',
            'CreateTable', 'CreateLink', 'Image', '|',
            {
                tooltipText: 'Preview',
                template: '<button id="preview-code" class="e-tbar-btn e-control e-btn e-icon-btn">' +
                    '<span class="e-btn-icon e-md-preview e-icons"></span></button>'
            }, '|', 'Undo', 'Redo']
    };

 
    public formatter: MarkdownFormatter = new MarkdownFormatter({ listTags: { 'OL': '1., 2., 3.' },
  
});

    public inlineMode: object = { enable: true, onSelection: true };

    //public mode: EditorMode = 'Markdown';
    public format: FormatModel = {
      width: 'auto'
  };
  styleElement =  null;
  nestedNode: string;
  question1: String;
 // converter = new md.Converter({

    public onCreate(): void {
        this.textArea = this.rteObj.contentModule.getEditPanel() as HTMLTextAreaElement;
        this.textArea.addEventListener('keyup', (e: KeyboardEventArgs) => {
            this.markdownConversion();
        });
        this.mdsource = document.getElementById('preview-code');
        this.mdsource.addEventListener('click', (e: MouseEvent) => {
            this.fullPreview();
            if ((e.target as HTMLElement).parentElement.classList.contains('e-active')) {
                this.rteObj.disableToolbarItem(['Bold', 'Italic', 'StrikeThrough', 'Formats', 'OrderedList',
                    'UnorderedList', 'CreateTable', 'SuperScript', 'SubScript', 'CreateLink', 'Image']);
            } else {
                this.rteObj.enableToolbarItem(['Bold', 'Italic', 'StrikeThrough', 'Formats', 'OrderedList',
                    'UnorderedList', 'CreateTable', 'SuperScript', 'SubScript', 'CreateLink', 'Image']);
            }
        });
    }
    public markdownConversion(): void {
        if (this.mdsource.classList.contains('e-active')) {
            const id: string = this.rteObj.getID() + 'html-view';
            const htmlPreview: Element = this.rteObj.element.querySelector('#' + id);
            htmlPreview.innerHTML = Marked((this.rteObj.contentModule.getEditPanel() as HTMLTextAreaElement).value);
        }
    }
    public fullPreview(): void {
        const id: string = this.rteObj.getID() + 'html-preview';
        let htmlPreview: HTMLElement = this.rteObj.element.querySelector('#' + id) as HTMLElement;
        const previewTextArea: HTMLElement = this.rteObj.element.querySelector('.e-rte-content') as HTMLElement;
        if (this.mdsource.classList.contains('e-active')) {
            this.mdsource.classList.remove('e-active');
            this.textArea.style.display = 'block';
            htmlPreview.style.display = 'none';
            previewTextArea.style.overflow = 'hidden';
        } else {
            this.mdsource.classList.add('e-active');
            if (!htmlPreview) {
                htmlPreview = createElement('div', { className: 'e-content e-pre-source' });
                htmlPreview.id = id;
                this.textArea.parentNode.appendChild(htmlPreview);
                previewTextArea.style.overflow = 'auto';
            }
            if (previewTextArea.style.overflow === 'hidden') {
                previewTextArea.style.overflow = 'auto';
            }
            this.textArea.style.display = 'none';
            htmlPreview.style.display = 'block';
            htmlPreview.innerHTML = Marked((this.rteObj.contentModule.getEditPanel() as HTMLTextAreaElement).value);
        }
    }


    add(event: MatChipInputEvent): void {
      const input = event.input;
      const value = event.value;
  
      // Add our fruit
      if ((value || '').trim()) {
        this.fruits.push(value.trim());
      }
  
      // Reset the input value
      if (input) {
        input.value = '';
      }
  
      this.fruitCtrl.setValue(null);
    }
  
    remove(fruit: any): void {
      const index = this.fruits.indexOf(fruit);
  
      if (index >= 0) {
        this.fruits.splice(index, 1);
      }
    }
  
    filter(name: string) {
      return this.allFruits.filter(fruit =>
          fruit.toLowerCase().indexOf(name.toLowerCase()) === 0);
    }
  
    selected(event: MatAutocompleteSelectedEvent): void {
      this.fruits.push(event.option.viewValue);
      this.fruitInput.nativeElement.value = '';
      this.fruitCtrl.setValue(null);
    }
  
  
     
  
  

   


  flatNodeMap = new Map<TodoItemFlatNode, TodoItemNode>();
  nestedNodeMap1 : any;

  nestedNodeMap = new Map<TodoItemNode, TodoItemFlatNode>();
  selectedParent: TodoItemFlatNode | null = null;
  newItemName = '';
  treeControl: FlatTreeControl<TodoItemFlatNode>;

  treeFlattener: MatTreeFlattener<TodoItemNode, TodoItemFlatNode>;

  dataSource: MatTreeFlatDataSource<TodoItemNode, TodoItemFlatNode>;

  checklistSelection = new SelectionModel<TodoItemFlatNode>(true /* multiple */);
//*************** */
fruits = [
  'code .....',
];

allFruits = [
  'Apple',
  'Lemon',
  'Lime',
  'Orange',
  'Strawberry'
];

@ViewChild('fruitInput',{static:false}) fruitInput: ElementRef;




  constructor( private qcmService: QcmService,public translate: TranslateService,private snackBar: MatSnackBarComponent,private fb1: FormBuilder,
    public dialogRef: MatDialogRef<AddUserComponent>,private _database: ChecklistDatabase,public dialog: MatDialog,private el: ElementRef,
    @Inject(MAT_DIALOG_DATA) public data1: DialogData,

    private  domainservice : DomainService,
    private fb: FormBuilder,private formBuilder: FormBuilder) 
    
    
    { this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel,
      this.isExpandable, this.getChildren);
    this.treeControl = new FlatTreeControl<TodoItemFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    
    this.messageForm = this.formBuilder.group({
      domain:['',Validators.required],
      
      title:['',Validators.required],
      question_body: ['', Validators.required],
      question:['',Validators.required],
      label:['',Validators.required],
      correct:['',Validators.required],
      responses: this.fb.array([
        this.fb.control({ "label":"" ,"correct":""})
      ])    
    }) 
    //domaines
    console.log(data1);
    this.local_data = {...data1};

    _database.dataChange.subscribe(data => {
      this.dataSource.data = data;
    });
    //************** */
    this.userForm = this.fb1.group({
      name: [],
      phones: this.fb1.array([
        this.fb1.control(null)
      ])
    })
  }


  addOptions(){
    this.questionData.question_body.responses.push({});

  }

  addPhone(): void {
    (this.messageForm.get('responses') as FormArray).push(
      this.fb.control(null)
    );
  }

  removePhone(index) {
    (this.questionData.question_body.responses.response as FormArray).removeAt(index);
  }

  getPhonesFormControls(): AbstractControl[] {
    return (<FormArray> this.messageForm.get('responses')).controls
  }

  getLevel = (node: TodoItemFlatNode) => node.level;

  isExpandable = (node: TodoItemFlatNode) => node.expandable;

  getChildren = (node: TodoItemNode): TodoItemNode[] => node.children;

  hasChild = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.expandable;

  hasNoContent = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.item === '';



  ngOnInit(): void {
    
   /* this.rteForm = new FormGroup({
        'desQuestion': new FormControl(null, Validators.required),
        'Domain' : new FormControl('', [
          Validators.required,
          Validators.nullValidator,
        ]),
      
        'responses': new FormControl(null, Validators.required),

      

    });*/

    this.domainservice.getAllDomains().subscribe(data1 => {
      this.domaines = data1;
  }) 

    
}





  /**
   * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
   */
  transformer = (node: TodoItemNode, level: number) => {
    const existingNode = this.nestedNodeMap.get(node);
    const flatNode = existingNode && existingNode.item === node.item
        ? existingNode
        : new TodoItemFlatNode();
    flatNode.item = node.item;
    flatNode.level = level;
    flatNode.expandable = !!node.children;
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;
  }

  /** Whether all the descendants of the node are selected. */
  descendantsAllSelected(node: TodoItemFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected = descendants.every(child =>
      this.checklistSelection.isSelected(child)
    );
    return descAllSelected;
  }

  /** Whether part of the descendants are selected */
  descendantsPartiallySelected(node: TodoItemFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(child => this.checklistSelection.isSelected(child));
    return result && !this.descendantsAllSelected(node);
  }

  /** Toggle the to-do item selection. Select/deselect all the descendants node */
  todoItemSelectionToggle(node: TodoItemFlatNode): void {
    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.isSelected(node)
      ? this.checklistSelection.select(...descendants)
      : this.checklistSelection.deselect(...descendants);

    // Force update for the parent
    descendants.every(child =>
      this.checklistSelection.isSelected(child)
    );
    this.checkAllParentsSelection(node);
  }

  /** Toggle a leaf to-do item selection. Check all the parents to see if they changed */
  todoLeafItemSelectionToggle(node: TodoItemFlatNode): void {
    this.checklistSelection.toggle(node);
    this.checkAllParentsSelection(node);
  }
  checkAllParentsSelection(node: TodoItemFlatNode) {
    throw new Error("Method not implemented.");
  }


  /** Check root node checked state and change it accordingly */
  checkRootNodeSelection(node: TodoItemFlatNode): void {
    const nodeSelected = this.checklistSelection.isSelected(node);
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected = descendants.every(child =>
      this.checklistSelection.isSelected(child)
    );
    if (nodeSelected && !descAllSelected) {
      this.checklistSelection.deselect(node);
    } else if (!nodeSelected && descAllSelected) {
      this.checklistSelection.select(node);
    }
  }
 

   

  public markdownConversion1(): void {
    if (this.mdsource.classList.contains('e-active')) {
        const id: string = this.rteObj.getID() + 'html-view';
        const htmlPreview: Element = this.rteObj.element.querySelector('#' + id);
        htmlPreview.innerHTML = Marked((this.rteObj.contentModule.getEditPanel() as HTMLTextAreaElement).value);
    }
}
  
 /* saveNode(node: TodoItemFlatNode, itemValue: string ,animal:String) {
    const nestedNode = this.flatNodeMap.get(node);

    this._database.updateItem(nestedNode!, itemValue);

   // this.userForm.get('responses') as FormArray).push(
     // this.fb.control(null));
    
   



  }/*
 add(event: MatChipInputEvent): void {
        let input = event.input;
        let value = event.value;

        // Add our requirement
        if ((value || '').trim()) {
            const requirements = this.form.get('requirements') as FormArray;
            requirements.push(this.fb.control(value.trim()));
        }

        // Reset the input value
        if (input) {
            input.value = '';
        }
    }

  saveNode(node: TodoItemFlatNode, itemValue: string ) {
    const nestedNode = this.flatNodeMap.get(node);
    this._database.updateItem(nestedNode!, itemValue);}
  
 /* remove node from tree btn */
 

  
   /* rteCreated(): void {
      this.rteEle.element.focus();
  }
  
  */  //************ */



 
  

  setCursorSelect(editor: ElementRef, start: number, end: number) {
    if (editor.nativeElement.setSelectionRange) {
      editor.nativeElement.setSelectionRange(start, end);
    } else {
      editor.nativeElement.selectionStart = start;
      editor.nativeElement.selectionEnd = end;
    }
  }
  
  save()
  {
    const database : any = []
  for ( let x in  this.getPhonesFormControls())
  {
    //this.listrep[x] = {this.messageForm.0}
  }
  }

 addQ() {
//*************** */


console.log(this.questionData);
/*for(
let x in this.getPhonesFormControls) {
  this.label  =this.messageForm.value.label
  this.correct =this.messageForm.value.correct;
}[];

 console.log("getPhonesFormControls()");
      const Qcm = { "title":this.messageForm.value.title,"question_body":{
    "question":this.messageForm.value.question,"responses":this.messageForm.value.responses }    };*/
/*const Qcmm =  {
  "title": "aa",

  "question_body": {
    "id": 20,
    "question": "la fonction sum est",
    "responses": [
      {
        "label": "reponse1",
        "correct": "false"
      },
      {
        "label": "reponse2",
        "correct": "true"
      }
    ]
  }
}*/
  this.qcmService.addQcm(this.questionData,this.selectedValue).subscribe(data=>{
      console.log(this.questionData);
    
        this.snackBar.openSnackBar("done!",'Close','red-snackbar'); 
         this.refresh();
    },
    (error) => {
   console.log("ERROR"+JSON.stringify(error))
    //
     this.snackBar.openSnackBar(error._body,'Close','red-snackbar');  
     this.refresh();
    //alert(error._body)
     /* <div class="alert alert-warning" role="alert">
  This is a warning alert—check it out!
</div> */

 });
    }
  refresh() {
   this. messageForm.reset()
 
  }
    openDialog(): void {
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '250px',
        data: {name: this.name, animal: this.animal}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.animal = result;
      });
    }


    openDialog1( ): void {
      const dialogRef = this.dialog.open(TestComponent, {
        width: '750px',
        data: {name0: this.questionData.title,name1: this.questionData.question_body.question,name2:this.questionData.domain
          ,name3:this.questionData.question_body.responses,animal1:this.animal}  
      }
      
      );
      
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.animal = result;
      });
    }




    onNoClick(): void {
      this.dialogRef.close();
    }






  }
   
     

  


 

 






