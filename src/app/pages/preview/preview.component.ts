/* tslint:disable */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FetchPreviewService } from 'src/app/shared/services/fetch-preview/fetch-preview.service';

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

  constructor(
    private fetch: FetchPreviewService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.fetch.getData().subscribe((value) => {
      this.data = value;
      console.log(this.data);

      Array(this.data).find((data) => {
        if (data.image) { this.images = data.image; console.log(this.images); }
        if (data.text) { this.texts = data.text; console.log(this.texts); }
        if (data.hello) { this.hellos = data.hello; console.log(this.hellos); }
      });

    });

  }

  public showEdit() {

    this.router.navigateByUrl(`/edit`)
  }

}
