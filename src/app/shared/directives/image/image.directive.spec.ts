/* tslint:disable */
import { TestBed } from '@angular/core/testing';
import { ViewContainerRef } from '@angular/core';

import { ImageDirective } from './image.directive';

describe('ImageDirective', () => {

 let viewContainerRef: ViewContainerRef
  
  beforeEach(() => {

		TestBed.configureTestingModule({
			declarations: [
				ImageDirective
			],
			providers: [
				ViewContainerRef
			]
		});

  });
  

  it('should create an instance', () => {
    const directive = new ImageDirective(viewContainerRef);
    expect(directive).toBeTruthy();
  });
});
