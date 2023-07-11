import { Component, Input } from '@angular/core';
import { HEROES, Hero } from '../../hero';

@Component({
  selector: 'hero-parent',
  template: ` <h2>{{ master }} controls {{ heroes.length }} heroes</h2>
    <hero-child
      *ngFor="let hero of heroes"
      [hero]="hero"
      [master]="master"
    ></hero-child>`,
})
export class HeroParent {
  heroes = HEROES;
  master = 'Master';
}
