import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';

import { EditComponent } from './edit/edit.component';
import { PreviewComponent } from './preview/preview.component';


@NgModule({
  declarations: [PreviewComponent, EditComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ]
})
export class PagesModule { }
