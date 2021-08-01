/* tslint:disable */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  form: FormGroup;



  constructor() {

    this.form = new FormGroup({
      image: new FormControl(''),
      height: new FormControl(''),
      width: new FormControl(''),
    });


  }

  onFileSelected(event) {
    const newele = document.querySelector('.load');
    const reader = new FileReader();


    reader.addEventListener("load", () => {

      sessionStorage.setItem('image', reader.result)
    })

    reader.readAsDataURL(event.target.files[0])

    const recent = sessionStorage.getItem('image')
    newele.setAttribute('src', recent)
  }

  get image() { return this.form.get('image'); }
  get height() { return this.form.get('height'); }

  submit() {
    console.log(this.form.value);
  }

  ngOnInit(): void {

    this.form.get('height').valueChanges.subscribe((value) => { console.log(value) })


  }

}
