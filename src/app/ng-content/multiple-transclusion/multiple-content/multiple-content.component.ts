import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-multiple-content',
  template: `<div style="width: 400px; margin: 10px; padding: 10px 0 10px 10px; border: 1px solid orange; display: block;">
    <h3><ng-content select="[heading]"></ng-content></h3>
    <span><ng-content select=".description"></ng-content></span>
    
    <div style="display: block">
      <button (click)="onClickCancel()">Cancel</button>
      <button><ng-content select="[btn]"></ng-content></button>
    </div>
    
  </div>`,
  styleUrls: ['./multiple-content.component.css']
})
export class MultipleContentComponent implements OnInit {

  constructor() { }

  @Output()
  cancel = new EventEmitter();

  ngOnInit() {
  }


  onClickCancel() {
    this.cancel.emit();
  }
}
