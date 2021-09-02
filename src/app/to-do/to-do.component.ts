import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../services/to-do.service';
import { ToDo } from './todo';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  
  todos: ToDo[]=[]
  constructor(private toDoService:ToDoService) { }
  page: number = 1;
  itemsPerPage:number=10;
 
  ngOnInit(): void {
    this.toDoService.getToDos().subscribe(data=>{
      this.todos=data;
    })
  }
    

 
       
}