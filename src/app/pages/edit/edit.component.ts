/* tslint:disable */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, AbstractControl, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  formImage: FormGroup;
  formText : FormGroup;
  public imageNew: { url: string, height: string, width: string };
  public currentName
  public currentImage;
  public showImage = false;
  public showText = false;

  constructor() {

    this.formImage = new FormGroup({
      image: new FormControl('', [Validators.required]),
      height: new FormControl('', [Validators.required]),
      width: new FormControl('', [Validators.required]),
      text:  new FormControl('', [Validators.required])
    });

    this.formText = new FormGroup({
      text:  new FormControl('', [Validators.required])
    });



  }

  onFileSelected(event) {

    const reader = new FileReader();
    this.currentName = event.target.files[0].name

    reader.addEventListener("load", () => {

      this.imageNew = {
        url: reader.result as string,
        height: '0',
        width: '0'
      }

      sessionStorage.setItem(this.currentName, JSON.stringify(this.imageNew))
    })

    reader.readAsDataURL(event.target.files[0])

  }


  get image() { return this.formImage.get('image'); }
  get height() { return this.formImage.get('height'); }
  get width() { return this.formImage.get('width'); }
  get text() { return this.formImage.get('text'); }

  submit() {
    const newele = document.querySelector('.load');
    const sesion = sessionStorage.getItem(this.currentName)

    sessionStorage.setItem(this.currentName, JSON.stringify({ url: JSON.parse(sesion).url, height: this.height.value, width: this.width.value }))


    if (sesion) {
      const recent = JSON.parse(sessionStorage.getItem(this.currentName)).url
      const width = JSON.parse(sessionStorage.getItem(this.currentName)).width
      const height = JSON.parse(sessionStorage.getItem(this.currentName)).height
      if (recent) {
        newele.setAttribute('src', recent)
        newele.setAttribute('height', String(height))
        newele.setAttribute('width', String(width))
      }
    }
  }

  ngOnInit(): void {

  }

  show(value){
    this.showImage = value === 'image';
    this.showText = value === 'text';
   
  }

}
