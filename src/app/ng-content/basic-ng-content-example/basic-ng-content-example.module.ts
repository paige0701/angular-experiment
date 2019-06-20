import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BasicNgContentExampleComponent} from './basic-ng-content-example.component';
import {RouterModule, Routes} from '@angular/router';
import { TestButtonComponent } from './test-button/test-button.component';

export const basicNgContentRoutes: Routes = [
  {path : 'ng-content/single', component: BasicNgContentExampleComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(basicNgContentRoutes)
  ],
  declarations: [BasicNgContentExampleComponent, TestButtonComponent]
})
export class BasicNgContentExampleModule { }

