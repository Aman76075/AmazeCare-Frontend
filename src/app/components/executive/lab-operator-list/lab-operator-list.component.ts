import { Component, OnInit } from '@angular/core';
import { ExecutiveService } from '../../../service/executive.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-lab-operator-list',
  imports: [NgFor],
  templateUrl: './lab-operator-list.component.html',
  styleUrl: './lab-operator-list.component.css'
})
export class LabOperatorListComponent implements OnInit {
  labOperator:any=[];
  errorMsg:string|undefined;
  constructor(private executiveService:ExecutiveService){}
  ngOnInit(): void {
      this.executiveService.getAllLabOperators().subscribe({
        next:(data)=>{
          this.labOperator=data;
        },
        error:(err)=>{
          this.errorMsg=err;
        }
      })
  }

}
