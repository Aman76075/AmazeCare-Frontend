import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExecutiveService } from '../../../service/executive.service';

@Component({
  selector: 'app-profile-executive',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './profile-executive.component.html',
  styleUrl: './profile-executive.component.css'
})
export class ProfileExecutiveComponent {
  successMsg: string|undefined
  errorMsg: string|undefined
  userData: any=[]
  profileForm: FormGroup
  constructor(private executiveService:ExecutiveService){
    this.profileForm=new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email]),
      contact: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    })
  }
  ngOnInit(): void {
    this.executiveService.getExecutiveDetails().subscribe({
      next:data=>{
        this.userData=data;
        this.profileForm.patchValue({
          name: this.userData.name,
          email: this.userData.email,
          contact: this.userData.contact
        });
      },
      error:err=>{

      }
    })
  }
  onProfileSubmit() {
    this.userData.email=this.profileForm.value.email;
    this.userData.contact=this.profileForm.value.contact;
    this.executiveService.updateExecutive(this.userData).subscribe({
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
