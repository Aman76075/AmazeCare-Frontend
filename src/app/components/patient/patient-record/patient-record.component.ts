import { Component } from '@angular/core';
import { InPatientService } from '../../../service/in-patient.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-patient-record',
  imports: [NgFor],
  templateUrl: './patient-record.component.html',
  styleUrl: './patient-record.component.css'
})
export class PatientRecordComponent {
  medicalRecords:any=[]
  reportDetails:any=[]
  patientId=localStorage.getItem('id')
  page:number=0;
  size:number=2;
  pageR:number=0;
  sizeR:number=2;
  constructor(private inPatientService:InPatientService){
    this.getData();
    this.getReportData();
  }
  prev() {
    if(this.page >0){
      this.page = this.page - 1 
      this.getData() 
    }
  }
  next() {
    this.page = this.page + 1 
    this.getData()
  }
  getData(){
    this.inPatientService.getMedicalRecord(this.patientId,this.page,this.size).subscribe({
      next:data=>{
        this.medicalRecords=data.content;
      },
      error:()=>{}
    })
  }
  nextR() {
    this.pageR = this.pageR + 1 
      this.getReportData()
  }
    prevR() {
      
      if(this.pageR >0){
        this.pageR = this.pageR - 1 
        this.getReportData() 
      }
  }
  getReportData(){
    this.inPatientService.getReportDetails(this.patientId,this.pageR,this.sizeR).subscribe({
      next:data=>{
        this.reportDetails=data.content;
      },
      error:()=>{}
    })

  }

}
