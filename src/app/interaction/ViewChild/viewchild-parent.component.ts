import { AfterViewInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { ViewchildChild } from './viewchild-child.component';

@Component({
  selector: 'app-vc-parent',
  template: `
    <h3>Countdown to Liftoff (via ViewChild)</h3>
    <button type="button" (click)="start()">Start</button>
    <button type="button" (click)="stop()">Stop</button>
    <div class="seconds">{{ seconds() }}</div>
    <app-vc-child></app-vc-child>
  `,
})
export class ViewchildParent implements AfterViewInit {
  @ViewChild(ViewchildChild)
  private timerComponent!: ViewchildChild;

  seconds() {
    return 0;
  }

  ngAfterViewInit() {
    // Redefine `seconds()` to get from the `ViewchildChild.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    setTimeout(() => (this.seconds = () => this.timerComponent.seconds), 0);
  }

  start() {
    this.timerComponent.start();
  }
  stop() {
    this.timerComponent.stop();
  }
}
