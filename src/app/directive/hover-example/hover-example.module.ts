import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HoverExampleComponent} from './hover-example.component';
import {RouterModule, Routes} from '@angular/router';
import {HoverBorderEmphasisDirective} from './directives/hover-border-emphasis.directive';

const routes: Routes = [
  {path: 'directive/hover-examples', component: HoverExampleComponent}]

@NgModule({
  declarations: [HoverExampleComponent, HoverBorderEmphasisDirective],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HoverExampleModule { }
