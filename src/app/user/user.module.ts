import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile.component';
import { userRoutes } from './user.routes';

@NgModule({
  declarations: [ProfileComponent, LoginComponent],
  imports: [CommonModule, RouterModule.forChild(userRoutes), FormsModule, ReactiveFormsModule],
})
export class UserModule {}
