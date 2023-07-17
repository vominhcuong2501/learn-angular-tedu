import { Input, Component } from '@angular/core';
import { AdComponent } from './ad.component';

@Component({
  template: ` <div class="job-ad">
    <h4>{{ data.headline }}</h4>
    {{ data.body }}
  </div>`,
})
export class HeroJobAd implements AdComponent {
  @Input() data: any;
}
