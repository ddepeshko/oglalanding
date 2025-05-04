import {Component, OnDestroy, OnInit} from '@angular/core';
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'app-countdown-timer',
  imports: [
    DecimalPipe
  ],
  templateUrl: './countdown-timer.component.html',
  styleUrl: './countdown-timer.component.scss',
  standalone: true,
})
export class CountdownTimerComponent  implements OnInit, OnDestroy {
  targetDate = new Date('2025-05-15T00:00:00');
  intervalId: any;

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  ngOnInit() {
    this.updateTime();
    this.intervalId = setInterval(() => this.updateTime(), 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  updateTime() {
    const now = new Date().getTime();
    const distance = this.targetDate.getTime() - now;

    if (distance > 0) {
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    } else {
      this.days = this.hours = this.minutes = this.seconds = 0;
    }
  }
}
