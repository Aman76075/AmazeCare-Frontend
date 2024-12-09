import { Component } from '@angular/core';
import { AdminService } from '../../../service/admin.service';
import { NgIf } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-onboard-admin',
  imports: [NgIf,ReactiveFormsModule],
  templateUrl: './onboard-admin.component.html',
  styleUrl: './onboard-admin.component.css'
})
export class OnboardAdminComponent {
  executiveOnboard:FormGroup
  errorMsg:string|undefined
  successMsg:string|undefined
  constructor(private adminService:AdminService){
    this.executiveOnboard=new FormGroup({
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
    this.adminService.registerLabOperator(this.executiveOnboard.value).subscribe({
      next:(data)=>{
        this.successMsg="Executive Onboarded Successfully"
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
