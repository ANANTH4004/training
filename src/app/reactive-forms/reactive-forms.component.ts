import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {
  myForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.myForm = new FormGroup(
      {
        uname: new FormControl('', Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email ]),
        readTerms: new FormControl(false)
      }
    );
  }

  onSubmit() {
    console.log('Form Submitted' , this.myForm)
   // this.myForm.reset();
  }

  accept() {
    this.myForm.patchValue({
    email:"varun@gmail.com",
      uname :"varun",
   
    });                                                                                   
  }
}
