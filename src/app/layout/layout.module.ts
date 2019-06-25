import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutComponent} from './layout.component';
import {RouterModule, Routes} from '@angular/router';
import {NgContentModule} from '../ng-content/ng-content.module';
import {DirectiveModule} from '../directive/directive.module';
import {ResolverModule} from '../resolver/resolver.module';

const routes: Routes = [
  {path: '', component: LayoutComponent, children: [
      {path: 'ng-content', loadChildren: () => import('app/ng-content/ng-content.module').then(m => m.NgContentModule)},
      {path: 'directive', loadChildren: () => import('app/directive/directive.module').then(m => m.DirectiveModule)},
      {path: 'resolver', loadChildren: ()=> import('app/resolver/resolver.module').then((m) => m.ResolverModule)}

    ]},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgContentModule,
    DirectiveModule,
    ResolverModule
  ],
  declarations: [LayoutComponent]
})
export class LayoutModule { }
