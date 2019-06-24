import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {OtherExampleComponent} from './other-example.component';
import {CcLogoDirective} from './directives/cc-logo.directive';

const routes : Routes = [
  {path: 'directive/others', component: OtherExampleComponent}
];

@NgModule({
  declarations: [OtherExampleComponent, CcLogoDirective],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OtherExampleModule { }
