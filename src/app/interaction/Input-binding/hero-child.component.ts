import { Component, Input } from '@angular/core';
import { Hero } from 'src/app/hero';

@Component({
  selector: 'hero-child',
  template: `<h3>{{ hero.name }} nói:</h3>
    <p>I, {{ hero.name }}, am at your service, {{ masterName }}</p>`,
})
export class HeroChild {
  @Input() hero!: Hero;
  @Input('master') masterName = '';
}
