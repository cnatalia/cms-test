/* tslint:disable */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, AbstractControl, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  form: FormGroup;
  public imageNew: { url: string, height: string, width: string };
  public currentName
  public currentImage;

  constructor() {

    this.form = new FormGroup({
      image: new FormControl('', [Validators.required]),
      height: new FormControl('', [Validators.required]),
      width: new FormControl('', [Validators.required]),
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


  get image() { return this.form.get('image'); }
  get height() { return this.form.get('height'); }
  get width() { return this.form.get('width'); }

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

    this.form.get('height').valueChanges.subscribe((value) => { console.log(value) })


  }

}
