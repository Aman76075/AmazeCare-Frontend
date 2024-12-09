import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DoctorService } from '../../../service/doctor.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-schedule',
  imports: [ReactiveFormsModule,NgIf,NgFor],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent implements OnInit {


  doctorScheduleForm:FormGroup;
  errorMsg:string|undefined
  successMsg:string|undefined
  timeSlot:any=[];
  constructor(private doctorService:DoctorService){
    this.doctorScheduleForm=new FormGroup({
      date:new FormControl('',[Validators.required]),
      timeSlot:new FormControl('',[Validators.required]),
      totalSlots:new FormControl('',[Validators.required,Validators.pattern(/[0-9]/)])
    });
  }
  ngOnInit(): void {
    this.doctorService.getAllTimeSlots().subscribe({
      next:data=>{
        this.timeSlot=data;
      },
      error:err=>{}
    })
  }
  resetMsg() {
    this.errorMsg=undefined;
    this.successMsg=undefined;
  }
  onFormSubmit() {
    this.doctorService.setSchedule(this.doctorScheduleForm.value).subscribe({
      next:data=>{
        this.successMsg='Schedule Set Successfully'
        this.errorMsg=undefined
      },
      error:err=>{
        this.errorMsg=err.error.msg;
      }
    })
  }

}
