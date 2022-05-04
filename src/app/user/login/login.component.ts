import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent{
  userName: string;
  password: string;
  invalidForm: boolean;
  loginInvalid = false;

  constructor(private authService: AuthService, private router: Router) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  login(formValues: any) {
    if(formValues.userName && formValues.password){
      this.authService.loginUser(formValues.userName, formValues.password).subscribe(res => {
        if(!res){
          this.loginInvalid = true;
          console.log("why u next");
        } else {
          this.router.navigate(['events']);
        }
      });
    } else {
      this.invalidForm = true;
    }
  }

  cancel(){
    this.router.navigate(['events']);
  }
}
