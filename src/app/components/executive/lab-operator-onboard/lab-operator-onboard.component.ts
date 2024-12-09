import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExecutiveService } from '../../../service/executive.service';

@Component({
  selector: 'app-lab-operator-onboard',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './lab-operator-onboard.component.html',
  styleUrl: './lab-operator-onboard.component.css'
})
export class LabOperatorOnboardComponent {
  labOperatorOnboard:FormGroup
  errorMsg:string|undefined
  successMsg:string|undefined
  constructor(private executiveService:ExecutiveService){
    this.labOperatorOnboard=new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,Validators.email]),
      contact: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      username: new FormControl('', [Validators.required,Validators.minLength(4)]),
      experience: new FormControl('', [Validators.required,Validators.pattern(/[0-9]/)]),
      password: new FormControl('', [Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)]),
      rePassword: new FormControl('', [Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)]),
      salary: new FormControl('', [Validators.required,Validators.pattern(/^[0-9]+\.?[0-9]*$/)])
    })
  }
  onFormSubmit() {
    this.executiveService.registerLabOperator(this.labOperatorOnboard.value).subscribe({
      next:(data)=>{
        this.successMsg="Lab Operator Onboarded Successfully"
        this.errorMsg=undefined
      },
      error:(err)=>{
        this.errorMsg=err.error.msg;
      }
    })
  }
  resetMsg() {
    this.errorMsg = undefined; 
    this.successMsg = undefined; 
  }


}
