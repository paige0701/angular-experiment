import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-test-button',
  template: `
    <button #btn (click)="onClickBtn()">
    <ng-content></ng-content>
  </button>`,
  styleUrls: ['./test-button.component.css']
})
export class TestButtonComponent implements OnInit {

  @ViewChild('btn')
  btn: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onClickBtn() {

    // is this the right way to get button text?
    window.alert(`${this.btn.nativeElement.innerText} button is clicked`);
  }

}
