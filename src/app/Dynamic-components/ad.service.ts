import { Injectable } from '@angular/core';
import { HeroProfile } from './hero-profile.component';
import { HeroJobAd } from './hero-job-ad.component';
import { AdItem } from './ad-item';
@Injectable()
export class AdService {
  getAds() {
    return [
      new AdItem(HeroProfile, {
        name: 'Bombasto',
        bio: 'Brave as they come',
      }),
      new AdItem(HeroProfile, {
        name: 'Dr. IQ',
        bio: 'Smart as they come',
      }),
      new AdItem(HeroJobAd, {
        headline: 'Hiring for several positions',
        body: 'Submit your resume today!',
      }),
      new AdItem(HeroJobAd, {
        headline: 'Openings in all departments',
        body: 'Apply today',
      }),
    ];
  }
}
