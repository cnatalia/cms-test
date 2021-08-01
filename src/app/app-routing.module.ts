/* tslint:disable */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditComponent } from './pages/edit/edit.component';

const routes: Routes = [
  {
		path: 'edit',
		component: EditComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
