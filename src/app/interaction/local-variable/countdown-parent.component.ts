import { Component, ViewChild } from '@angular/core';

// LOCAL VARIABLE
// gọi các phương thức và biến của child bằng cách đặt biến id #timer vào thẻ của child
// tuy nhiên chỉ dùng khi gọi các biên public nếu như thằng con dùng private thì k gọi đc
@Component({
  selector: 'app-countdown-parent-lv',
  template: `
    <h3>Countdown to Liftoff (via local variable)</h3>
    <button type="button" (click)="timer.start()">Start</button>
    <button type="button" (click)="timer.stop()">Stop</button>
    <div class="seconds">{{ timer.seconds }}</div>
    <app-countdown-timer #timer></app-countdown-timer>
  `,
  styleUrls: ['./countdown.scss'],
})
export class CountdownLocalVarParentComponent {}
