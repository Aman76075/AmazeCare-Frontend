import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-executive-sidebar',
  imports: [RouterLink],
  templateUrl: './executive-sidebar.component.html',
  styleUrl: './executive-sidebar.component.css'
})
export class ExecutiveSidebarComponent {
  name:String|undefined;
  constructor(private router:Router){
    this.name=localStorage.getItem('name')?.split(' ')[0];
  }
logout() {
  localStorage.clear();
  this.router.navigateByUrl('login?msg=you have successfully logged out')
}

}
