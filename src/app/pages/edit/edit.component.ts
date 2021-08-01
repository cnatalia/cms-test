/* tslint:disable */
import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup, AbstractControl, RequiredValidator, Validators } from '@angular/forms';

import { ImageComponent } from '../image/image.component';
import { TextComponent } from '../text/text.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  formImage: FormGroup;
  formText: FormGroup;
  public imageNew: { url: string, height: string, width: string };
  public currentName
  public currentImage;
  public showImage = false;
  public showText = false;
  public payload = { 'image': [{}], 'text': [{}], 'hello': [{}] };

  @ViewChild("vf", { read: ViewContainerRef }) vf: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {

    this.formImage = new FormGroup({
      image: new FormControl('', [Validators.required]),
      height: new FormControl('', [Validators.required]),
      width: new FormControl('', [Validators.required]),
      text: new FormControl('')
    });

    this.formText = new FormGroup({
      text: new FormControl('', [Validators.required])
    });

  }

  public createComponent(type): void {
    const component = type === 'image' ? this.componentFactoryResolver.resolveComponentFactory(ImageComponent) : this.componentFactoryResolver.resolveComponentFactory(TextComponent);
    this.vf.createComponent(component);

    if(type === 'image'){
      this.payload.image.push([{ 'width': this.width.value }, { 'height': this.height.value }, { 'url': this.currentImage }, { 'name': this.currentName }])

    }else{
      this.payload.text.push({'id': 1, 'text': this.text.value})
    }
    console.log(this.payload)
  }

  onFileSelected(event) {

    const reader = new FileReader();
    this.currentName = event.target.files[0].name

    reader.addEventListener("load", () => {
      this.currentImage = reader.result as string
    })

    reader.readAsDataURL(event.target.files[0])

  }


  get image() { return this.formImage.get('image'); }
  get height() { return this.formImage.get('height'); }
  get width() { return this.formImage.get('width'); }
  get text() { return this.formImage.get('text'); }

  submit() {
    console.log(this.payload)
    //type, value, width?, height?

    // const newele = document.querySelector('.load');
    // const sesion = sessionStorage.getItem(this.currentName)

    // sessionStorage.setItem(this.currentName, JSON.stringify({ url: JSON.parse(sesion).url, height: this.height.value, width: this.width.value }))


    // if (sesion) {
    //   const recent = JSON.parse(sessionStorage.getItem(this.currentName)).url
    //   const width = JSON.parse(sessionStorage.getItem(this.currentName)).width
    //   const height = JSON.parse(sessionStorage.getItem(this.currentName)).height
    //   if (recent) {
    //     newele.setAttribute('src', recent)
    //     newele.setAttribute('height', String(height))
    //     newele.setAttribute('width', String(width))
    //   }
    // }
  }

  ngOnInit(): void {

  }

  show(value) {
    this.showImage = value === 'image';
    this.showText = value === 'text';

  }

}
