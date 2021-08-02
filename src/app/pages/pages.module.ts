import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';

import { EditComponent } from './edit/edit.component';
import { PreviewComponent } from './preview/preview.component';
import { ImageComponent } from './image/image.component';
import { TextComponent } from './text/text.component';
import { HelloComponent } from './hello/hello.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [PreviewComponent, EditComponent, ImageComponent, TextComponent, HelloComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ]
})
export class PagesModule { }
