import { Component, ChangeDetectorRef } from '@angular/core';
import { UserRegistrationService } from '../fetch-api-data';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-movie-card',
  imports: [
    CommonModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.scss'
})
export class MovieCardComponent {
  movies: any[] = [];
  constructor(
    public UserRegistrationService: UserRegistrationService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.UserRegistrationService.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      this.cdRef.detectChanges();
    });
  }
}
