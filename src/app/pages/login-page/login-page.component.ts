import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [NgIf,FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
resetMsg() {
  this.successMsg=undefined
  this.msg=undefined
  this.errorMsg=undefined
}
  username: string="";
  password: string="";
  successMsg: string | undefined;
  errorMsg:string | undefined;
  msg:String|undefined;
  constructor(private authService: AuthService,private router: Router,private actRoute: ActivatedRoute){
    this.actRoute.queryParams.subscribe(p=>{
      this.msg=p['msg']
    })
  }
  onLogin() {
    this.authService.login({
      username:this.username,
      password:this.password
    }).subscribe({
      next:(data)=>{
        let token=data.token;
        this.authService.getUserDetails(token).subscribe({
          next:data=>{
            localStorage.setItem('token',token)
            localStorage.setItem('username',data.user.username)
            localStorage.setItem('name',data.name)
            localStorage.setItem('id',data.id)
            localStorage.setItem('role',data.user.role)
            let role=data.user.role;
            switch(role){
              case 'DOCTOR':
                this.router.navigateByUrl("/doctor/doctor-profile");
                break;
              case 'EXECUTIVE':
                this.router.navigateByUrl("/executive/executive-profile");
                break;
              case 'ADMIN':
                this.router.navigateByUrl("/admin");
                break;
              case 'IN_PATIENT':
                this.router.navigateByUrl("/in-patient");
                break;    
              default:
                this.router.navigateByUrl("/broken-link")
                break    
            }
          },error:err=>{
            this.errorMsg=err.name;
          }
        })
  
      },
      error:(err) => {
        this.errorMsg=err.message.toString();
      }
    })  
  }
}
