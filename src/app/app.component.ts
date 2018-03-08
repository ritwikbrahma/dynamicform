import { Component,OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms'
import { Customer } from './customer.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public myForm: FormGroup;//form model

  constructor(private fb: FormBuilder){

  }
  ngOnInit(){
    // we will initialize our form here
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      xaxis: this.fb.array([
          this.initxaxis(),
      ])
  });
}

initxaxis() {
  // initialize xaxis
  return this.fb.group({
      items: ['', Validators.required],
      
  });
}

additem() {
// add item to the list
const control = <FormArray>this.myForm.controls['xaxis'];
control.push(this.initxaxis());
}

removeitem(i: number) {
// remove item from the list
const control = <FormArray>this.myForm.controls['xaxis'];
control.removeAt(i);
}

save(model: Customer) {
 
  console.log(model);
}

  }

