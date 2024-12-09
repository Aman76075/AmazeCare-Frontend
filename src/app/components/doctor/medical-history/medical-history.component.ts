import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../../service/doctor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medical-history',
  imports: [NgFor],
  templateUrl: './medical-history.component.html',
  styleUrl: './medical-history.component.css'
})
export class MedicalHistoryComponent implements OnInit {
  medicalRecords:any=[]
  reportDetails:any=[]
  patientId:any
  page:number=0;
  size:number=2;
  pageR:number=0;
  sizeR:number=2;
  constructor(private doctorService:DoctorService,private actRoute:ActivatedRoute){
    this.actRoute.paramMap.subscribe(p=>{
      this.patientId=p.get('id');
    })
    this.getData();
    this.getReportData();
  }
  ngOnInit(): void {
    
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
    this.doctorService.getMedicalRecord(this.patientId,this.page,this.size).subscribe({
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
    this.doctorService.getReportDetails(this.patientId,this.pageR,this.sizeR).subscribe({
      next:data=>{
        this.reportDetails=data.content;
      },
      error:()=>{}
    })

  }
    

}
