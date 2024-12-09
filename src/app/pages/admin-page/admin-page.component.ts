import { Component } from '@angular/core';
import { AdminSidebarComponent } from "../../components/admin/admin-sidebar/admin-sidebar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  imports: [AdminSidebarComponent,RouterOutlet],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {

}
