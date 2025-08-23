import { Component, signal } from '@angular/core';
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
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  templateUrl: './app.html', 
  styleUrl: './app.scss'
})

export class App {
 title = 'myFlix-Angular-client';

  constructor(public dialog: MatDialog) { }
// This is the function that will open the dialog when the signup button is clicked  
openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
// Assigning the dialog a width
    width: '280px'
    });
  }

}


/*  template: `
  <h2>hellloooo</h2>
<p>hi</p>

<input [formControl]="nameControl">
<p>name:{{nameControl.value}}</p>
  `, */