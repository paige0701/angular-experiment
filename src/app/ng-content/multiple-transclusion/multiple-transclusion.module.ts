import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MultipleTransclusionComponent} from './multiple-transclusion.component';
import {RouterModule, Routes} from '@angular/router';

export const multipleNgContentRoutes: Routes = [
  {path : 'ng-content/multiple', component: MultipleTransclusionComponent}
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(multipleNgContentRoutes)
  ],
  declarations: [MultipleTransclusionComponent]
})
export class MultipleTransclusionModule { }

