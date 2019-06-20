import {RouterModule, Routes} from '@angular/router';
import {NgContentComponent} from './ng-content.component';
import {NgModule} from '@angular/core';

export const routes: Routes = [
  {path: 'ng-content',
    component: NgContentComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)], exports: [RouterModule]
})
export class NgContentRoutingModule {}
