import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgContentRoutingModule} from './ng-content.route';
import {NgContentComponent} from './ng-content.component';
import {MultipleTransclusionModule} from './multiple-transclusion/multiple-transclusion.module';
import {BasicNgContentExampleModule} from './basic-ng-content-example/basic-ng-content-example.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MultipleTransclusionModule,
    NgContentRoutingModule,
    BasicNgContentExampleModule
  ],
  declarations: [NgContentComponent]
})
export class NgContentModule {}
