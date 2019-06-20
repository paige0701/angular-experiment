import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-transclusion',
  template: `
    
    <div style="width: 50%">팝업을 만든다고 가정을 했을 때 아래처럼 heading, description, btn 값을 직접 전달할 수도 있다. 간단히 보여주기식 컴포넌트를 만들 때 ng-content를 사용한다면 편리할 것 같다.</div>
    
    <app-multiple-content (cancel)="onCancel()">
      <div heading>Are you sure you want to delete?</div>
      <div description>Related items might all be deleted</div>
      <div btn>Ok</div>
    </app-multiple-content>


    <app-multiple-content>
      <div heading>Want to close?</div>
      <div description></div>
      <div btn>Close</div>
    </app-multiple-content>


    <app-multiple-content>
      <div heading>Submit?</div>
      <div description>It may take up to 5 minutes</div>
      <div btn>Ok</div>
    </app-multiple-content>`,
  styleUrls: ['./multiple-transclusion.component.css']
})
export class MultipleTransclusionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onCancel() {
    window.alert('cancelled');
  }
}
