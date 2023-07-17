import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent {
  @Input() item = '';
  @Output() deleteRequest = new EventEmitter<string>();

  lineThrough = '';
  delete() {
    this.deleteRequest.emit(this.item);
    this.lineThrough = this.lineThrough ? '' : 'line-through';
  }
}
