import { Component } from '@angular/core';

/**
 * Generated class for the ButtonLinkComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'button-link',
  templateUrl: 'button-link.html'
})
export class ButtonLinkComponent {

  text: string;

  constructor() {
    console.log('Hello ButtonLinkComponent Component');
    this.text = 'Hello World';
  }

}
