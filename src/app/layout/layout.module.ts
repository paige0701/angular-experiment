import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutComponent} from './layout.component';
import {RouterModule, Routes} from '@angular/router';
import {NgContentModule} from '../ng-content/ng-content.module';

const routes: Routes = [
  {path: '', component: LayoutComponent, children: [
      {path: 'ng-content', loadChildren: () => import('app/ng-content/ng-content.module').then(m => m.NgContentModule)}
    ]},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgContentModule
  ],
  declarations: [LayoutComponent]
})
export class LayoutModule { }
