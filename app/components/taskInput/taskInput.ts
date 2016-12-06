import { Component, Input, Output, OnChanges, SimpleChange, EventEmitter } from '@angular/core';

@Component({
  selector: 'task-input',
  moduleId: module.id,
  styleUrls: ['taskInput.css'],
  template: `
  <form class="form form-inline TaskInputContainer" (ngSubmit)="onSubmit()" >
        <div class="form-group">    
            <label htmlFor="taskInput" class="TaskInputLabel" >Title your task:</label>
            <input id="taskInput" type="text" class="form-control TaskInput" [(ngModel)]="task.title" name="title" />
            <button id="taskAdd" class="button btn btn-success TaskInputBtn" type="submit" (click)="addTask()" >Add Task</button>
        </div>      
	  </form>
  `,
})
export class TaskInput {
  task = { };
  @Output() onSubmitted = new EventEmitter<Object>();  

  onSubmit() {    
    if ('title' in this.task) {
      this.onSubmitted.emit(this.task);
      this.task = {};
    }  
  }

  addTask() {
    console.log(this.task);
  }
}
