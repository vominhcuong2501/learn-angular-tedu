import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { InputOutputComponent } from './Input-Output/input-output.component';
import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { VoterComponent } from './interaction/EventEmitter/voter.component';
import { VoteTakerComponent } from './interaction/EventEmitter/votetaker.component';
import { HeroChild } from './interaction/Input-binding/hero-child.component';
import { HeroParent } from './interaction/Input-binding/hero-parent.component';
import { VersionChild } from './interaction/OnChanges/version-child.component';
import { VersionParent } from './interaction/OnChanges/version-parent.component';
import { NameChild } from './interaction/Setter-Getter/name-child.component';
import { NameParent } from './interaction/Setter-Getter/name-parent.component';
import { AstronautComponent } from './interaction/Use-service/astronaut.component';
import { MissionControlComponent } from './interaction/Use-service/missioncontrol.component';
import { ViewchildChild } from './interaction/ViewChild/viewchild-child.component';
import { ViewchildParent } from './interaction/ViewChild/viewchild-parent.component';
import { InteractionComponent } from './interaction/interaction.component';
import { CountdownLocalVarParentComponent } from './interaction/local-variable/countdown-parent.component';
import { CountdownTimerComponent } from './interaction/local-variable/countdown-timer.component';
import { ItemDetailComponent } from './Input-Output/item-detail/item-detail.component';
import { ItemOutputComponent } from './Input-Output/item-output/item-output.component';
import { GeneralComponent } from './Input-Output/general/general/general.component';

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
    InteractionComponent,
    InputOutputComponent,
    ItemDetailComponent,
    ItemOutputComponent,
    GeneralComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
