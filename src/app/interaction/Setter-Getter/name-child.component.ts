import { Component, Input } from '@angular/core';
import { Hero } from 'src/app/hero';

@Component({
  selector: 'app-name-child',
  template: `<h3>{{ name }}</h3>`,
})
export class NameChild {
  @Input()
  get name(): string {
    return this._name;
  }
  set name(name: string) {
    this._name = (name && name.trim()) || 'no name set';
  }
  private _name = '';
}
