import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DirectiveComponent} from './directive.component';
import {DirectiveRoutingModule} from './directive.route';
import {RouterModule} from '@angular/router';
import {HoverExampleModule} from './hover-example/hover-example.module';

@NgModule({
  declarations: [DirectiveComponent],
  imports: [
    CommonModule,
    RouterModule,
    DirectiveRoutingModule,
    HoverExampleModule
  ]
})
export class DirectiveModule { }
