import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ResolverComponentResolver} from './resolver.component.resolver';
import {ResolverComponent} from './resolver.component';
import { RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {path: 'resolver', component: ResolverComponent, resolve: {resolvedData: ResolverComponentResolver}}
]

@NgModule({
  declarations: [ResolverComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
})
export class ResolverModule { }
