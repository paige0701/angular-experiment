import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: `./directive.component.html`,
  styles: [`.container-box {border:1px solid orange; margin: 5px; padding: 5px; width:50%}`]
})
export class DirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
