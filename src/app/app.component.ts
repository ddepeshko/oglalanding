import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CountdownTimerComponent } from './components/countdown-timer/countdown-timer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  imports: [RouterLink, RouterOutlet, CountdownTimerComponent],
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public targetDate = new Date('2025-05-29T00:00:00');
}
