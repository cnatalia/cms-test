import { Component, Input, OnInit } from '@angular/core';
import * as Moment from 'moment';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  @Input() name;
  @Input() isRender = false;
  public date =  Moment().format('MMMM Do YYYY, h:mm:ss a');

  constructor() { }

  ngOnInit(): void {
  }

}
