import { Component } from '@angular/core';
import { SidebarComponent } from "../../components/doctor/sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-doctor-page',
  imports: [SidebarComponent,RouterOutlet],
  templateUrl: './doctor-page.component.html',
  styleUrl: './doctor-page.component.css'
})
export class DoctorPageComponent {

}
