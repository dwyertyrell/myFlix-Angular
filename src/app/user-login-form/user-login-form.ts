import { Component } from '@angular/core';
import { UserRegistrationService } from '../fetch-api-data';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.html',
  styleUrls: ['./user-login-form.scss'],
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class UserLoginForm {
  userData = {
    username: '',
    password: ''
  };

  constructor(
    private fetchApiData: UserRegistrationService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  loginUser(): void {
    this.fetchApiData.userLogin(this.userData).subscribe({
      next: (result) => {
        // Save token to localStorage
        if (result.token && typeof window !== 'undefined' && window.localStorage) {
          localStorage.setItem('token', result.token);
          localStorage.setItem('user', this.userData.username);
          console.log(`the user's token: ${result.token}`)
        }
        this.snackBar.open('Login successful!', 'OK', { duration: 2000 });
        //once login is successful, navigate to 'movies' route
        this.router.navigate(['movies'])
        
        // Optionally, redirect or close dialog here
      },
      error: (err) => {
        this.snackBar.open('Login failed: ' + (err.error || err.message), 'OK', { duration: 3000 });
      }
    });
  }
}
