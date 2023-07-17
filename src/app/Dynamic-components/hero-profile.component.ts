import { Input, Component } from '@angular/core';
import { AdComponent } from './ad.component';

@Component({
  template: ` <div class="hero-profile">
    <h3>Feature Hero Profile</h3>
    <h4>{{ data.name }}</h4>
    <p>
      {{ data.bio }}
    </p>
    <strong>Hire this hero today !</strong>
  </div>`,
})
export class HeroProfile implements AdComponent {
  @Input() data: any;
}
