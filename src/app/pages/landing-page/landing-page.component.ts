import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { LoginPageComponent } from "../login-page/login-page.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [NavBarComponent,RouterOutlet],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
