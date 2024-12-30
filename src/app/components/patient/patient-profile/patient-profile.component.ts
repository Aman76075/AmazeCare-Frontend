import { Component, OnInit } from '@angular/core';
import { InPatientService } from '../../../service/in-patient.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-patient-profile',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './patient-profile.component.html',
  styleUrl: './patient-profile.component.css'
})
export class PatientProfileComponent implements OnInit {
  successMsg: string|undefined
    errorMsg: string|undefined
    userData: any=[]
    inPatientId:any|undefined;
    patientId=localStorage.getItem('id')
    profileForm: FormGroup
    role=localStorage.getItem('role')
    constructor(private inPatientService:InPatientService){
      this.inPatientService.patientDetails(localStorage.getItem('id')).subscribe({
        next:data=>{
          this.userData=data;
          this.inPatientId=data.id;
          this.profileForm.patchValue({
            name: this.userData.name,
            email: this.userData.email,
            contact: this.userData.contact
          });
        }
      })
      this.profileForm=new FormGroup({
        email: new FormControl('', [Validators.required,Validators.email]),
        contact: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      })
      
    }
  ngOnInit(): void {
    
  }
  resetMsg() {
    this.successMsg=undefined
    this.errorMsg=undefined
  }
  onProfileSubmit() {
    this.userData.email=this.profileForm.value.email;
    this.userData.contact=this.profileForm.value.contact;
    this.inPatientService.updatePatientDetails(this.inPatientId,this.userData).subscribe({
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

}
