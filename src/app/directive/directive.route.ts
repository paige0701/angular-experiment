import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DirectiveComponent} from './directive.component';

export const routes: Routes = [
  {path: 'directive', component: DirectiveComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectiveRoutingModule {}
