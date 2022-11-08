import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem: string | null;
  todos: Todo[];
  constructor() { 
    this.localItem= localStorage.getItem("todos");
    if(this.localItem == null){
      this.todos = []
    } else{
      this.todos=JSON.parse(this.localItem)
    }
      // {
      //   sno:1,
      //   title:"This is title1",
      //   desc:"description",
      //   active: true
      // },
      // {
      //   sno:2,
      //   title:"This is title2",
      //   desc:"description",
      //   active: true
      // },
      // {
      //   sno:3,
      //   title:"This is title3",
      //   desc:"description",
      //   active: true
      // }
    
  }

  ngOnInit(): void {
    
  }

  deleteToDo(todo:Todo){
    console.log(todo);
    const index= this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos))

  }
  addToDo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos))


  }

}
