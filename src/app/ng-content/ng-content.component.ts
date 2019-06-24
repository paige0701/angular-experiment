import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ng-content-container',
  template: `<h3>ng-content examples</h3>
  <div style="width: 50%">
    요즘은 Angular뿐만 아니라 다른 framework에서도 컴포넌트를 만들어서 개발을 한다.
    컴포넌트를 잘 설계해야 재사용성을 늘리고 코드도 깔끔하게 만들 수 있다. 
    지금까지 잘 쓰지 않았던 ng-content를 공부해보려고 한다. 개발하면서 굉장히 유용하게 사용될 것 같다.
  </div>
  
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
