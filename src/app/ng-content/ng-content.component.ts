import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ng-content-container',
  template: `<h2>ng-content examples</h2>
  <button (click)="onClick('single')">Single</button>
  <button (click)="onClick('multiple')">Multiple</button>`,
})
export class NgContentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick(type: string) {
    this.router.navigate([`/ng-content/${type}`]);
  }

}
