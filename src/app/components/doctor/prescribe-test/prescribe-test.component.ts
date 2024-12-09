import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DoctorService } from '../../../service/doctor.service';
import { ActivatedRoute } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-prescribe-test',
  imports: [ReactiveFormsModule,NgFor,NgIf],
  templateUrl: './prescribe-test.component.html',
  styleUrl: './prescribe-test.component.css'
})
export class PrescribeTestComponent implements OnInit{
  prescribeTestForm:FormGroup;
  errorMsg: string|undefined;
  successMsg: string|undefined;
  patientId:any;
  testAndScans:any=[];
  constructor(private doctorService:DoctorService,private actRoute:ActivatedRoute){
    this.prescribeTestForm=new FormGroup({
      testScansType:new FormControl('',[Validators.required]),
      description:new FormControl('',[Validators.required])
    });
  }
  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(p=>{
      this.patientId=p.get('id');
    });
    this.doctorService.getAllTestType().subscribe({
      next:(data)=>{
        this.testAndScans=data;
      },
      error:(err)=>{
      }
    })
  }
  resetMsg() {
    this.errorMsg=undefined;
    this.successMsg=undefined;
  }
  onFormSubmit() {
    this.doctorService.prescribeTest(this.prescribeTestForm.value,this.patientId).subscribe({
      next:data=>{
        this.successMsg='Test/Scan Prescribed Successfully'
        this.errorMsg=undefined
      },
      error:err=>{
        this.errorMsg=err.error.msg;
        this.successMsg=undefined
      }
    })
  }
}  
