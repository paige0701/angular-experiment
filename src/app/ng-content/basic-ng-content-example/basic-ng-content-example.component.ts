import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-ng-container-test',
  template: `<h4>기본 ng-content를 설명한다</h4> 
  <div style="width: 50%">
    <div>공통으로 사용할 버튼을 만든다고 가정을 한다, app-test-button이라는 컴포넌트를 만들었다.
      컴포넌트를 만들고 값을 @Input()으로 받아올 수도 있지만 ng-content를 사용할 수 도 있다</div>
  <app-test-button>Cancel</app-test-button>
  <app-test-button>Ok</app-test-button>
  <app-test-button>Delete</app-test-button>
  </div>
  `,
})
export class BasicNgContentExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
