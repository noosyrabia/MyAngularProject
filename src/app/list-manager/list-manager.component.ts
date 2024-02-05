import { Component } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { InputButtonUnitComponent } from '../input-button-unit/input-button-unit.component';
import { CommonModule } from '@angular/common';
import {TodoItemComponent} from '../todo-item/todo-item.component';


@Component({
  selector: 'app-list-manager',
  standalone: true,
  imports: [InputButtonUnitComponent, CommonModule, TodoItemComponent],
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent {
  todoList: TodoItem[] = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];

  addItem(title: string) {    
    this.todoList.push({ title: title });
  }

}
