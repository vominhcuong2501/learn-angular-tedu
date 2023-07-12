import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { HeroParent } from './interaction/Input-binding/hero-parent.component';
import { HeroChild } from './interaction/Input-binding/hero-child.component';
import { NameChild } from './interaction/Setter-Getter/name-child.component';
import { NameParent } from './interaction/Setter-Getter/name-parent.component';
import { VersionChild } from './interaction/OnChanges/version-child.component';
import { VersionParent } from './interaction/OnChanges/version-parent.component';
import { VoterComponent } from './interaction/EventEmitter/voter.component';
import { VoteTakerComponent } from './interaction/EventEmitter/votetaker.component';
import { CountdownLocalVarParentComponent } from './interaction/local-variable/countdown-parent.component';
import { CountdownTimerComponent } from './interaction/local-variable/countdown-timer.component';
import { ViewchildChild } from './interaction/ViewChild/viewchild-child.component';
import { ViewchildParent } from './interaction/ViewChild/viewchild-parent.component';
import { MissionService } from './interaction/Use-service/mission.service';
import { MissionControlComponent } from './interaction/Use-service/missioncontrol.component';
import { AstronautComponent } from './interaction/Use-service/astronaut.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    HeroParent,
    HeroChild,
    NameChild,
    NameParent,
    VersionChild,
    VersionParent,
    VoterComponent,
    VoteTakerComponent,
    CountdownLocalVarParentComponent,
    CountdownTimerComponent,
    ViewchildChild,
    ViewchildParent,
    MissionControlComponent,
    AstronautComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
