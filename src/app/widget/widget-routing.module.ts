import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WidgetComponent} from './widget.component';

const routes: Routes = [
  {
    path: '',
    component: WidgetComponent,
    data: {
      breadcrumb: 'Widget'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WidgetRoutingModule { }
