import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
navigateToSignUp() {
 this.router.navigateByUrl("/sign-up");
}
  constructor(private router:Router){}
navigateToLogin() {
  this.router.navigateByUrl("/login")
}

}
