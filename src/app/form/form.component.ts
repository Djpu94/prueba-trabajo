import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
  
  document:FormGroup;
  detail: FormGroup;
  
  constructor(private fb: FormBuilder){}

    ngOnInit(){

      this.document = this.fb.group({
        client: ['',Validators.required],
        branch_ofice: ['',Validators.required],
        currency:['',Validators.required],
      });

      this.detail = this.fb.group({
        name: ['',Validators.required],
        quantity: ['',Validators.required],
        price:['', Validators.required],
        subtotal:['',Validators.required]
      });

    }

  
  enviar(formulario):void{
    console.log(formulario)
  }
}


