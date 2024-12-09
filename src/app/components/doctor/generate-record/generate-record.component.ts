import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DoctorService } from '../../../service/doctor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-generate-record',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './generate-record.component.html',
  styleUrl: './generate-record.component.css'
})
export class GenerateRecordComponent implements OnInit {
  medicalRecordForm: FormGroup;
  errorMsg: string|undefined;
  successMsg: string|undefined;
  patientId:any;
  constructor(private doctorService:DoctorService,private actRoute:ActivatedRoute){
    this.medicalRecordForm=new FormGroup({
      prescription:new FormControl('',[Validators.required]),
      treatmentPlan:new FormControl('',[Validators.required])
    });
  }
  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(p=>{
      this.patientId=p.get('id');
    })
  }
  resetMsg(){
    this.errorMsg = undefined; 
    this.successMsg = undefined; 
  }
  onFormSubmit() {
    this.doctorService.generateMedicalRecord(this.medicalRecordForm.value,this.patientId).subscribe({
      next:(data)=>{
        this.successMsg='Medical Record Generated Successfully'
        this.errorMsg=undefined
      },
      error:(err)=>{
        this.errorMsg=err.error.msg;
      }
    })
  }
}
