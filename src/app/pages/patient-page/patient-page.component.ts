import { Component } from '@angular/core';
import { PatientSidebarComponent } from "../../components/patient/patient-sidebar/patient-sidebar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-patient-page',
  imports: [PatientSidebarComponent,RouterOutlet],
  templateUrl: './patient-page.component.html',
  styleUrl: './patient-page.component.css'
})
export class PatientPageComponent {

}
