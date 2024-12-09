import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  imports: [RouterLink],
  templateUrl: './admin-sidebar.component.html',
  styleUrl: './admin-sidebar.component.css'
})
export class AdminSidebarComponent {
  name:String|undefined;
  constructor(private router:Router){
    this.name=localStorage.getItem('name')?.split(' ')[0];
  }
logout() {
  localStorage.clear();
  this.router.navigateByUrl('login?msg=you have successfully logged out')
}

}
