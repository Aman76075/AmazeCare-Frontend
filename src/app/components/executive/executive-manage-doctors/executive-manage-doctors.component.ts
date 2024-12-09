import { Component, OnInit } from '@angular/core';
import { ExecutiveService } from '../../../service/executive.service';
import { NgFor, NgIf } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-executive-manage-doctors',
  imports: [NgFor,ReactiveFormsModule,NgIf],
  templateUrl: './executive-manage-doctors.component.html',
  styleUrl: './executive-manage-doctors.component.css'
})
export class ExecutiveManageDoctorsComponent implements OnInit {
  departments: any =[];
  errorMsg:string|undefined
  successMsg:string|undefined
  doctorOnboard:FormGroup
  constructor(private executiveService: ExecutiveService){
    this.doctorOnboard=new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,Validators.email]),
      contact: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      username: new FormControl('', [Validators.required,Validators.minLength(4)]),
      experience: new FormControl('', [Validators.required,Validators.pattern(/[0-9]/)]),
      password: new FormControl('', [Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)]),
      rePassword: new FormControl('', [Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)]),
      department: new FormControl('', [Validators.required])

    })
  }
  ngOnInit(): void {
    this.executiveService.getAllDepartment().subscribe({
      next:(data)=>{
        this.departments=data;
      },
      error:(err)=>{}
    })
  }
  onFormSubmit() {
    if(this.doctorOnboard.value.password!=this.doctorOnboard.value.rePassword){
      this.errorMsg='Passwords do not match,please try again'
      this.successMsg=undefined
      return;
    }
    this.executiveService.registerDoctor(this.doctorOnboard.value).subscribe({
      next: (data)=>{
        this.successMsg = 'Doctor Onboarded Successfully ';
        this.errorMsg = undefined; 
      },
      error: (err)=>{
        this.errorMsg = err.error.msg; 
      }
    })
  }
  resetMsg(){
    this.errorMsg = undefined; 
    this.successMsg = undefined; 
  }

}
