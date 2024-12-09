import { Component, OnInit } from '@angular/core';
import { ExecutiveService } from '../../../service/executive.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-executive-doctors-list',
  imports: [NgFor],
  templateUrl: './executive-doctors-list.component.html',
  styleUrl: './executive-doctors-list.component.css'
})
export class ExecutiveDoctorsListComponent implements OnInit {
  doctor: any=[]; 
  errorMsg:string|undefined;
  constructor(private executiveService: ExecutiveService){}
  ngOnInit(): void {
    this.executiveService.getAllDoctors().subscribe({
      next:(data)=>{
        this.doctor=data;
      },
      error:(err)=>{
        this.errorMsg=err;
      }
    })
  }

}
