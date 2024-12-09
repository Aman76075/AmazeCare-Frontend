import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { AdminService } from '../../../service/admin.service';

@Component({
  selector: 'app-all-executive',
  imports: [NgFor],
  templateUrl: './all-executive.component.html',
  styleUrl: './all-executive.component.css'
})
export class AllExecutiveComponent {
  executives:any=[];
  errorMsg:string|undefined;
  constructor(private adminService:AdminService){}
  ngOnInit(): void {
      this.adminService.getAllExecutives().subscribe({
        next:(data)=>{
          this.executives=data;
        },
        error:(err)=>{
          this.errorMsg=err;
        }
      })
  }

}
