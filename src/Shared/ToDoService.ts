import {Injectable} from '@angular/core';
@Injectable()
export class ToDoService{
    todos: Array<{title:string,note: string, date: string}> = [];

    addNew(item){
        this.todos.push(item);
    }

    getAll(){
        return this.todos;
    }
}