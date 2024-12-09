import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [NgClass,RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  linkType:string|undefined;
  name:any;
  constructor(private router:Router){
    this.name='Dr. '+localStorage.getItem('name')?.split(' ')[0];
  }
  linkClick(linkType:string){
    this.linkType=linkType;
  }
  getClassOn(){
    return {
      active:this.linkType==='appointment'?true:false
    }
  }
  logout(){
    localStorage.clear();
    this.router.navigateByUrl('login?msg=you have successfully logged out')
  }

}
