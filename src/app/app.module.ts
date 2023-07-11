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
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
