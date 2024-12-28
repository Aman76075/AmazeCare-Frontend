import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InPatientService } from '../../service/in-patient.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  patientSignupForm: FormGroup;
  errorMsg: string | undefined;
  successMsg: string | undefined;
  constructor(private inpatientService: InPatientService) {
    this.patientSignupForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, Validators.min(1)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      contact: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      emergency_contact: new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      aadhar: new FormControl('', [Validators.required, Validators.minLength(12), Validators.maxLength(12)]),
      address: new FormControl('',[Validators.required]),
      allergies: new FormControl(''),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
      ]),
      rePassword: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
      ])
    });
  }
  resetMsg() {
    this.errorMsg = undefined;
    this.successMsg = undefined;
  }
  onFormSubmit() {
    if(this.patientSignupForm.value.password!=this.patientSignupForm.value.rePassword){
      this.errorMsg='Passwords do not match,please try again'
      this.successMsg=undefined
      return;
    }
    this.inpatientService.patientRegister(this.patientSignupForm.value).subscribe({
      next: (data)=>{
        this.successMsg = 'Patient Registered Successfully ';
        this.errorMsg = undefined; 
      },
      error: (err)=>{
        this.errorMsg = err.error.msg; 
      }
    })
  }


}
