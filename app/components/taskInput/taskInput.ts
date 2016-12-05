import { Component } from '@angular/core';

@Component({
  selector: 'task-input',
  moduleId: module.id,
  styleUrls: ['taskInput.css'],
  template: `
  <form class="form form-inline TaskInputContainer">
        <div class="form-group">    
            <label htmlFor="taskInput" class="TaskInputLabel" >Title your task:</label>
            <input id="taskInput" type="text" class="form-control TaskInput" [ngModel]="task.title" name="title" />
            <button id="taskAdd" class="button btn btn-success TaskInputBtn" type="button" (click)="addTask()" >Add Task</button>
        </div>      
	  </form>
  `,
})
export class TaskInput { task = {}; }
