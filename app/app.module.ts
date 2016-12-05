import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { TaskInput } from './components/TaskInput/TaskInput';
import { TasksList } from './components/TasksList/TasksList';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, Home, TaskInput, TasksList, Header ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
