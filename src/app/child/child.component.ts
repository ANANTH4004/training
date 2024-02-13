import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ContentChild,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent  implements OnInit, DoCheck, AfterContentInit, AfterContentChecked {
  
    counter = 0;
    interval: any;
  
    @Input()
    firstName = '';
  
     @ContentChild('parentContent') parentContent: any;
    @ViewChild('childContent', {static: true}) childContent: any;
  
    constructor() {
      console.log('Child Constructor called');
    }
  
    ngOnInit(): void {
      console.log('Child OnInit - component is initialized');
      console.log("OnInit - " , this.parentContent);
      
    }
  
  
    ngAfterContentChecked() {
      console.log('Child After Content checked');
    }
   
    ngDoCheck() {
      console.log('Child DoCheck');
    }
  
    ngAfterContentInit() {
      console.log('Child After Content Init');
      console.log('AfterContentInit - ' + this.parentContent);
    }
  
  
  
    // ngAfterViewInit() {
    //   console.log('Child After View Init');
    //   console.log('AfterViewInit - ' + this.childContent);
    // }
  
    // ngAfterViewChecked() {
    //   console.log('Child After View checked');
    // }
}
