/* tslint:disable */
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef, AfterViewChecked, AfterContentChecked, AfterContentInit, AfterViewInit, OnChanges, DoCheck, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, AbstractControl, RequiredValidator, Validators } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';

import { FetchPreviewService } from 'src/app/shared/services/fetch-preview/fetch-preview.service';

import { HelloComponent } from '../hello/hello.component';
import { ImageComponent } from '../image/image.component';
import { TextComponent } from '../text/text.component';

const NAME_USER = 'Natalia';
const SESSION = 'preview1'
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, AfterViewInit{
  form: FormGroup;
  public currentName
  public currentImage;
  public showImage = false;
  public showText = false;
  public payload: Data = { image: [], text: [], hello: [] };
  public consecutive = 1;
  public idSession = 1;
  public dataSession;
  @ViewChild("vf", { read: ViewContainerRef }) vf: ViewContainerRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private fetch: FetchPreviewService,
    private router: Router,
    protected route: ActivatedRoute,
    private cdref: ChangeDetectorRef
  ) {

    this.form = new FormGroup({
      image: new FormControl('', [Validators.required]),
      text: new FormControl('', [Validators.required])
    });


  }

  public createComponent(type): void {


    const component = type === 'image' ? this.componentFactoryResolver.resolveComponentFactory(ImageComponent) : (type === 'text' ? this.componentFactoryResolver.resolveComponentFactory(TextComponent) : this.componentFactoryResolver.resolveComponentFactory(HelloComponent));
    this.vf.createComponent(component);
  }

  public createPayload(type){
   
    if (type === 'image') {
      this.payload.image.push({ 'url': this.currentImage, 'name': this.currentName })

    } else if (type === 'text') {
      this.payload.text.push({ 'id': this.consecutive, 'text': this.text.value })
      this.consecutive = this.consecutive + 1
    } else {
      this.payload.hello.push({ 'name': NAME_USER })

    }
  }

  onFileSelected(event) {

    const reader = new FileReader();
    this.currentName = event.target.files[0].name

    reader.addEventListener("load", () => {
      this.currentImage = reader.result as string
    })

    reader.readAsDataURL(event.target.files[0])

  }


  get image() { return this.form.get('image'); }
  get text() { return this.form.get('text'); }

  showPreview() {
    
    this.fetch.setData(this.payload)
    sessionStorage.clear()
    sessionStorage.setItem(SESSION, JSON.stringify(this.payload))
    this.idSession = this.idSession + 1;
    this.router.navigateByUrl(`/preview`)
  }

ngAfterViewInit(){
  if (this.route.snapshot.paramMap.get('data')) {
    this.dataSession = sessionStorage.getItem(this.route.snapshot.paramMap.get('data'))
    this.payload = JSON.parse(this.dataSession)
 
    let images;
    let texts;
    let hellos;

    images = JSON.parse(this.dataSession).image
    texts = JSON.parse(this.dataSession).text
    hellos = JSON.parse(this.dataSession).hello

    images.forEach(element => {
      this.createComponent('image')
    });
    texts.forEach(element => {
      this.createComponent('text')
    });
    hellos.forEach(element => {
      this.createComponent('hello')
    });
    this.cdref.detectChanges();
  }
}
  ngOnInit(): void {


  }

  show(value) {
    this.showImage = value === 'image';
    this.showText = value === 'text';

  }

}
