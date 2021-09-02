import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { ToDo } from '../to-do/todo';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  apiUrl="http://localhost:3000/todos"

  constructor(private httpClient:HttpClient) { }

  getToDos():Observable<ToDo[]>{
    
    return this.httpClient.get<ToDo[]>(this.apiUrl);

  }

  getTodosByUserId(userId:number):Observable<ToDo[]>{
    
    return this.httpClient.get<ToDo[]>(this.apiUrl+"?userId="+userId);

  }

  getTodoDetailsById(id:number):Observable<ToDo>{
    
    return this.httpClient.get<ToDo>(this.apiUrl+"/"+id);
  
}
 

}
