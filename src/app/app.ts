import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {bootstrapApplication} from '@angular/platform-browser'
import {provideHttpClient} from '@angular/common/http'



@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})


export class App {
  protected readonly title = signal('myFlix-Angular-client');
}

bootstrapApplication(App, {
  providers: [
    provideHttpClient()
  ]
})