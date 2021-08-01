import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageDirective } from './directives/image/image.directive';
import { TextDirective } from './directives/text.directive';




@NgModule({
  declarations: [ImageDirective, TextDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
