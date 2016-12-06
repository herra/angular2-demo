import { Component } from '@angular/core';

@Component({
  selector: 'content-component',
  templateUrl: `./app/components/home/home.html`,  
})
  
export class Home  {
  name = 'Angular';
  tasks = [{ title: 'test', content: 'some beatiful content', deadline: (new Date()).toLocaleString() },
      { title: 'test2', content: 'some ugly content', deadline: (new Date()).toLocaleString() }];

  onSubmitted(task: any) {
    console.log(task);
    this.tasks.push(task);
  }
}
