import { Component, Input } from '@angular/core';
import { HEROES, Hero } from '../../hero';

@Component({
  selector: 'app-hero-parent',
  template: ` <h2>{{ master }} controls {{ heroes.length }} heroes</h2>
    <app-hero-child
      *ngFor="let hero of heroes"
      [hero]="hero"
      [master]="master"
    ></app-hero-child>`,
})
export class HeroParent {
  heroes = HEROES;
  master = 'Master';
}
