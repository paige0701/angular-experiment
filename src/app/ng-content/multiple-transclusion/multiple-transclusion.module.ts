import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MultipleTransclusionComponent} from './multiple-transclusion.component';
import {RouterModule, Routes} from '@angular/router';
import { MultipleContentComponent } from './multiple-content/multiple-content.component';

export const multipleNgContentRoutes: Routes = [
  {path : 'ng-content/multiple', component: MultipleTransclusionComponent}
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(multipleNgContentRoutes)
  ],
  declarations: [MultipleTransclusionComponent, MultipleContentComponent]
})
export class MultipleTransclusionModule { }

