import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InPatientService } from '../../../service/in-patient.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-book-appointment',
  imports: [ReactiveFormsModule,NgIf,NgFor],
  templateUrl: './book-appointment.component.html',
  styleUrl: './book-appointment.component.css'
})
export class BookAppointmentComponent implements OnInit {
  departments: any = [];
  doctors: any = [];
  timeSlot:any=[];
  successMsg: string | undefined;
  errorMsg: string | undefined;

  appointmentForm: FormGroup;
  constructor(private inPatientService: InPatientService) {
    this.appointmentForm = new FormGroup({
      department: new FormControl('', [Validators.required]),
      doctor: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      timeSlot:new FormControl('',[Validators.required])
    });
  }
  ngOnInit(): void {
    this.inPatientService.getAllDepartment().subscribe({
      next: (data) => {
        this.departments = data;
      },
      error: (err) => {
        this.errorMsg = 'Failed to load departments.';
      },
    });
    this.inPatientService.getAllTimeSlots().subscribe({
      next:data=>{
        this.timeSlot=data;
      },
      error:err=>{}
    })
  }
  onDepartmentChange() {
    const department = this.appointmentForm.value.department;
    if (department) {
      this.inPatientService.getDoctorByDepartment(department).subscribe({
        next: (data) => {
          this.doctors = data;
        },
        error: (err) => {
          this.errorMsg = 'Failed to load doctors for the selected department.';
        },
      });
    }
  }
  onFormSubmit() {
    this.inPatientService.bookAppointment(this.appointmentForm.value).subscribe({
      next:data=>{
        this.successMsg="Appointment Booked Successfully"
        this.errorMsg=undefined;
      },
      error:err=>{
        this.errorMsg=err;
        this.successMsg=undefined;
      }
    })

  }
  resetMessages() {
    this.successMsg = undefined;
    this.errorMsg = undefined;
  }

}
