import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, DoCheck  {
  isChild = true;
  firstName = "";

  constructor() {
    console.log("Parent Constructor called");
   }

  ngOnInit(): void {
    console.log("Parent OnInit - component is initialized");
  }
  ngDoCheck() {
    console.log("Parent DoCheck");
  }

  toggleChild() {
    this.isChild = !this.isChild;
  }

}
