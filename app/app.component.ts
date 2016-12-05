import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <header-component greeting="{{specialGreeting}}"></header-component>
    <content-component></content-component>
  `,
  styles: [
    //require('../node_modules/bootstrap/less/bootstrap.less'),
  ],
})
export class AppComponent  { specialGreeting = 'Hello World Angular!' }
