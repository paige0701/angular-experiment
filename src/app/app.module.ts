import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {LayoutModule} from './layout/layout.module';

const appRoutes: Routes = [
  {path: '', loadChildren: () => import('app/layout/layout.module').then(m => m.LayoutModule)},
  // {path: 'ng-content', loadChildren: 'app/ng-content/ng-content.module#NgContentModule'}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
