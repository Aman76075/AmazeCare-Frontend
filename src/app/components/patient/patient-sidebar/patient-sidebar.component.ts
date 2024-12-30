import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { InPatientService } from '../../../service/in-patient.service';

@Component({
  selector: 'app-patient-sidebar',
  imports: [RouterLink],
  templateUrl: './patient-sidebar.component.html',
  styleUrl: './patient-sidebar.component.css'
})
export class PatientSidebarComponent implements OnInit{
    name:any|undefined;
    patientInfo:any=[];
    constructor(private router:Router, private inPatientService:InPatientService){}
    ngOnInit(): void {
      this.inPatientService.patientDetails(localStorage.getItem('id')).subscribe({
        next:data=>{
          this.patientInfo = data;
          this.name=data.name;
        }
      })
    
  }
    logout(){
      localStorage.clear();
      this.router.navigateByUrl('login?msg=you have successfully logged out')
    }

}
