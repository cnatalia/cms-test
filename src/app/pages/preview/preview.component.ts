/* tslint:disable */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FetchPreviewService } from 'src/app/shared/services/fetch-preview/fetch-preview.service';
const SESSION = 'preview1'

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  public data;
  public images;
  public texts;
  public hellos;
  public saveData;

  constructor(
    private fetch: FetchPreviewService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.fetch.getData().subscribe((value) => {
      this.data = value;

      Array(this.data).find((data) => {
        if (data.image) { this.images = data.image; }
        if (data.text) { this.texts = data.text; }
        if (data.hello) { this.hellos = data.hello; }
      });

    });

  }

  public showEdit() {
    this.saveData = sessionStorage.getItem(SESSION)
    this.router.navigateByUrl(`/edit/${SESSION}`)
  }

}
