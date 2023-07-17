import { Component, OnInit } from '@angular/core';
import { AdService } from './ad.service';
import { AdItem } from './ad-item';

@Component({
  selector: 'app-dynamic',
  template: ` <div>
    <app-ad-banner [ads]="ads"></app-ad-banner>
  </div>`,
})
export class DynamicComponents implements OnInit {
  ads: AdItem[] = [];

  constructor(private adService: AdService) {}
  ngOnInit(): void {
    this.ads = this.adService.getAds();
  }
}
