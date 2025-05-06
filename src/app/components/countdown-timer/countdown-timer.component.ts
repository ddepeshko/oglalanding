import {Component, Inject, Input, OnDestroy, OnInit, PLATFORM_ID} from '@angular/core';
import {DecimalPipe, isPlatformBrowser} from '@angular/common';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-countdown-timer',
  imports: [
    DecimalPipe
  ],
  templateUrl: './countdown-timer.component.html',
  styleUrl: './countdown-timer.component.scss',
  standalone: true,
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  @Input() targetDate = new Date('2025-05-17T00:00:00');
  subscription: Subscription = new Subscription();

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.subscription = interval(1000).subscribe(() => {
        this.updateTime();
      });
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  updateTime() {
    if (!this.targetDate) {
      console.error('targetDate is not defined');
      return;
    }
    const now = new Date().getTime();
    const distance = this.targetDate.getTime() - now;
    const target = this.targetDate.getTime();
    if (isNaN(target)) {
      console.error('Invalid date format in targetDate');
      return;
    }
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
