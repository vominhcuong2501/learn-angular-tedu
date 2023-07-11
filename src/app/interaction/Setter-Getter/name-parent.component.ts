import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-name-parent',
  template: ` <app-name-child
    *ngFor="let name of names"
    [name]="name"
  ></app-name-child>`,
})
export class NameParent {
  names = ['Tiêu Viêm', '    ', ' Nhã Phi ', ' Vân Chi'];
}
