import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import  { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

    todos:Todo[];

  constructor(private todoService:TodoService) { }
  
  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => { //must subscribe to the observable
        this.todos = todos; //This is what we're displaying in the template, in line 12.
    });  
  }

}
