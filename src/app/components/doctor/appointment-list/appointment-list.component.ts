import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../../service/doctor.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-appointment-list',
  imports: [NgFor,RouterLink],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent{

  appointments:any=[]
  errorMsg:string|undefined;
  successMsg:string|undefined;
  // appointments = [
  //   {
  //     appointmentId: 'A101',
  //     patientId: 'P001',
  //     patientName: 'John Doe',
  //     timeSlot: '10:00 AM - 10:30 AM',
  //     gender:'Male',
  //     age:12,patientType:'OP'
  //   },
  //   {
  //     appointmentId: 'A102',
  //     patientId: 'P002',
  //     patientName: 'Jane Smith',
  //     timeSlot: '11:00 AM - 11:30 AM',
  //     gender:'Male',
  //     age:12,patientType:'OP'
  //   },
  //   {
  //     appointmentId: 'A101',
  //     patientId: 'P001',
  //     patientName: 'John Doe',

  //     timeSlot: '10:00 AM - 10:30 AM',
  //     gender:'Male',
  //     age:12,
  //     patientType:'OP'
  //   },
  //   {
  //     appointmentId: 'A101',
  //     patientId: 'P001',
  //     patientName: 'John Doe',
  //     timeSlot: '10:00 AM - 10:30 AM',
  //     gender:'Male',
  //     age:12,
  //     patientType:'OP'
  //   }
  //   // Add more appointment objects as needed
  // ];

  constructor(private doctorService:DoctorService) {
    this.getAllAppointments();
  }
  getAllAppointments() {
    this.doctorService.getAppointments().subscribe({
      next:(data)=>{
        this.appointments=data;
      },
      error:(err)=>{

      }
    })
  }
  markAsCompleted(arg0: number) {
    console.log('markAsCompleted')
   this.doctorService.markCompleted(arg0).subscribe({
    next:(data)=>{
      this.getAllAppointments()

    },
    error:(err)=>{

    }
   })
  }

}
