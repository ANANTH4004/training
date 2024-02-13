import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.scss']
})
export class AttributeDirectiveComponent {

  isHighlighted: boolean = false;
  isUnderlined: boolean = false;

 // isHighlighted: boolean = false;
  fontSize: number = 16;
  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }
 
  increaseFontSize() {
    this.fontSize += 2;
  }
}
