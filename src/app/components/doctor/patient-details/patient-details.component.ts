import { Component, NgModule } from '@angular/core';
import { DoctorService } from '../../../service/doctor.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-patient-details',
  imports: [NgFor,FormsModule,NgIf],
  templateUrl: './patient-details.component.html',
  styleUrl: './patient-details.component.css'
})
export class PatientDetailsComponent {
  medicalRecords: any = [];
  reportDetails: any = [];
  patientId: string = '';
  page: number = 0;
  size: number = 2;
  pageR: number = 0;
  sizeR: number = 2;
  msg:String|undefined

  constructor(private doctorService: DoctorService) {}

  ngOnInit(): void {}

  search() {
    if (this.patientId) {
      this.page = 0;
      this.pageR = 0;
      this.msg=undefined
      this.getData();
      this.getReportData();
    } else {
      alert('Please enter a Patient ID');
    }
  }

  prev() {
    if (this.page > 0) {
      this.page -= 1;
      this.getData();
    }
  }

  next() {
    this.page += 1;
    this.getData();
  }

  getData() {
    this.doctorService
      .getMedicalRecord(this.patientId, this.page, this.size)
      .subscribe({
        next: (data) => {
          
        
          this.medicalRecords = data.content;
          if(this.medicalRecords.length===0){
            this.msg='No Records Found'
          }
        },
        error: () => {
          alert('Error fetching medical records');
        },
      });
  }

  prevR() {
    if (this.pageR > 0) {
      this.pageR -= 1;
      this.getReportData();
    }
  }

  nextR() {
    this.pageR += 1;
    this.getReportData();
  }

  getReportData() {
    this.doctorService
      .getReportDetails(this.patientId, this.pageR, this.sizeR)
      .subscribe({
        next: (data) => {
          this.reportDetails = data.content;
        },
        error: () => {
          alert('Error fetching report details');
        },
      });
  }
} 
