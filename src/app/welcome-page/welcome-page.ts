import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgStyle } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { 
  FormGroup, 
  FormControl, 
  FormsModule, 
  NgModel, 
  ReactiveFormsModule, 
} from '@angular/forms';
import { UserRegistrationFormComponent } from '../user-registration-form/user-registration-form';
import { UserLoginForm } from '../user-login-form/user-login-form';

@Component({
  selector: 'app-welcome-page',
  imports: [
    FormsModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSnackBarModule],
  templateUrl: './welcome-page.html',
  styleUrl: './welcome-page.scss'
})
export class WelcomePageComponent {
 constructor(public dialog: MatDialog) { }
// This is the function that will open the dialog when the signup button is clicked  
openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
      width: '280px'
    });
  }

// This is the function that will open the dialog when the login button is clicked
openUserLoginDialog(): void {
    this.dialog.open(UserLoginForm, {
      width: '280px'
    });
  }

}
