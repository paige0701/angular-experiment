import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-example',
  templateUrl: './other-example.component.html',
  styleUrls: ['./other-example.component.css']
})
export class OtherExampleComponent implements OnInit {

  cardNumber: number;

  constructor() { }

  ngOnInit() {
  }

  onKeyUpEvent(data) {
    this.cardNumber = data.currentTarget.value;
  }

}
