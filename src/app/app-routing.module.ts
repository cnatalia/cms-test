/* tslint:disable */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditComponent } from './pages/edit/edit.component';
import { PreviewComponent } from './pages/preview/preview.component';

const routes: Routes = [
	{
		path: '',
		component: EditComponent
	},
  {
		path: 'edit',
		component: EditComponent
	},
  {
		path: 'preview',
		component: PreviewComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
