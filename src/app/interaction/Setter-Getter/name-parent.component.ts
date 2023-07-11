import { Component, Input } from '@angular/core';
import { Hero } from 'src/app/hero';

@Component({
  selector: 'name-parent',
  template: ` <name-child
    *ngFor="let name of names"
    [name]="name"
  ></name-child>`,
})
export class NameParent {
  names = ['Tiêu Viêm', '    ', ' Nhã Phi ', ' Vân Chi'];
}
