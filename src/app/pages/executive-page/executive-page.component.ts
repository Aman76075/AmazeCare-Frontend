import { Component } from '@angular/core';
import { ExecutiveSidebarComponent } from "../../components/executive/executive-sidebar/executive-sidebar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-executive-page',
  imports: [ExecutiveSidebarComponent,RouterOutlet],
  templateUrl: './executive-page.component.html',
  styleUrl: './executive-page.component.css'
})
export class ExecutivePageComponent {

}
