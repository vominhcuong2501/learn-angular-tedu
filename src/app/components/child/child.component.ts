import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnChanges, OnInit {
  @Input() userName = '';

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnCHanges triggered', changes);
    if (!changes['userName'].isFirstChange()) {
      if (changes['userName'].currentValue === 'Chris') {
        this.userName = 'Hello ' + this.userName;
      } else {
        this.userName = changes['userName'].previousValue;
      }
    }
  }

  ngOnInit(): void {
    console.log('ngOnInit from the child component');
  }
}
