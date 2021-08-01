import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewComponent } from './preview/preview.component';
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [PreviewComponent, EditComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
