import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DirectiveComponent} from './directive.component';
import {DirectiveRoutingModule} from './directive.route';
import {RouterModule} from '@angular/router';
import {HoverExampleModule} from './hover-example/hover-example.module';
import {OtherExampleModule} from './other-example/other-example.module';

@NgModule({
  declarations: [DirectiveComponent],
  imports: [
    CommonModule,
    RouterModule,
    DirectiveRoutingModule,
    HoverExampleModule,
    OtherExampleModule
  ]
})
export class DirectiveModule { }
