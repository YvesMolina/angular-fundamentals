import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  invalidForm: boolean;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login(formValues: any) {
    if(formValues.userName && formValues.password){
      this.authService.loginUser(formValues.userName, formValues.password);
      this.router.navigate(['events']);
    } else {
      this.invalidForm = true;
    }
  }

  cancel(){
    this.router.navigate(['events']);
  }
}