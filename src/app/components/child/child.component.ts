import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent
  implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked
{
  @Input() userName = '';

  // chạy đầu tiên nếu có binding dữ liệu và sẽ chạy khi có thay đổi còn k có thì không chạy
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

  // chạy sau OnChanges và chạy 1 lần duy nhất
  ngOnInit(): void {
    console.log('ngOnInit from the child component');
  }

  // chạy sau OnChanges và OnInit khi OnChanges thay dổi và nó sẽ chạy kể cả khi binding khong thay đổi giá trị => hạn chế sử dụng
  ngDoCheck(): void {
    console.log('ngDoCheck triggered');
  }

  @ViewChild('wrapper') wrapper!: ElementRef;
  @ContentChild('contentWrapper') content!: ElementRef;

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit - wrapper', this.wrapper);
    console.log('ngAfterContentInit - contentWrapper', this.content);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked triggered');
  }
}
