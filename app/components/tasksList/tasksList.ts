import { Component } from '@angular/core';

@Component({
  selector: 'tasks-list',
  moduleId: module.id,
  styleUrls: ['tasksList.css'],
  template: `
  <div class="container">
        <table class="table table-striped">
          <caption>List of tasks</caption>
          <thead>
            <tr>
              <th>Title</th>
              <th>Content</th>
              <th>Deadline</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let row of tasks">
              <td>{{row.title}}</td>
              <td>{{row.content}}</td>
              <td>{{row.deadline}}</td>
            </tr>
          </tbody>
        </table>
      </div>
  `,
})
export class TasksList { tasks = [{ title: 'Test 1'}]; }
