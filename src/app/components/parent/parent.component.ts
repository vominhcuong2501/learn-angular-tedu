import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  userName = 'Maria';

  updateUser() {
    this.userName = 'Chris';
  }

  ngOnInit(): void {
    console.log('ngOnInit from the parent component');
  }

  isChildDestroyed = false;

  destroyed() {
    this.isChildDestroyed = true;
  }
}
