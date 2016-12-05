import { Component, Input } from '@angular/core'; //Notice! included Input 

@Component({
  selector: 'header-component',
  moduleId: module.id,
  styleUrls: ['header.css'],  
  template: `
  <div class="App">
    <div class="App-header">
      <img src="logo.svg" class="App-logo" alt="logo" />
      <h2>{{greeting}}</h2>
    </div>     
  </div>
  `,
})
  
export class Header {
  
  @Input()
  greeting: 'Hello World!';
}
