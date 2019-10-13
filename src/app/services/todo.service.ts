import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //In order to use this, I must insert into the constructor
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs'; //The type of observable needs to be imported. A Todo[] observable.


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string =
   'https://jsonplaceholder.typicode.com/todos'; //Adding the Url as a property as a string.
    todosLimit = '?_limit=5';

  constructor( private http:HttpClient ) { }

  getTodos (): Observable <Todo[]>{
    return this.http.get<Todo []>(`${this.todosUrl}${this.todosLimit}` //template literal
    //since we made todosUrl a property, we have to reference it with a this.propertyname
    ); 
  }
}
