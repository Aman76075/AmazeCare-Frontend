import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, UntypedFormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { DoctorService } from '../../service/doctor.service';

@Component({
  selector: 'app-profile',
  imports: [NgIf,ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  successMsg: string|undefined
  errorMsg: string|undefined
  userData: any=[]
  profileForm: FormGroup
  constructor(private authService: AuthService,private doctorService:DoctorService){
    this.profileForm=new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email]),
      contact: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    })
  }
  ngOnInit(): void {
    this.authService.getDoctorDetailsById().subscribe({
      next:data=>{
        this.userData=data;
        this.profileForm.patchValue({
          name: this.userData.name,
          department: this.userData.department,
          email: this.userData.email,
          contact: this.userData.contact
        });
      },
      error:err=>{

      }
    })
  }
  onPasswordChange() {
    
  }
  onProfileSubmit() {
    this.userData.email=this.profileForm.value.email;
    this.userData.contact=this.profileForm.value.contact;
    this.doctorService.updateDoctor(this.userData).subscribe({
      next:data=>{
        this.successMsg="Updated Successfully"
        this.errorMsg=undefined
      },
      error:err=>{
        this.errorMsg=err;
        this.successMsg=undefined
      }
    })
    
  }
  resetMsg() {
    this.successMsg=undefined
    this.errorMsg=undefined
  }




}
