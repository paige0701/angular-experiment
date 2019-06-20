import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-transclusion',
  template: `
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
