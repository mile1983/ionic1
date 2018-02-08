import {Injectable} from '@angular/core';
import { Storage } from '@ionic/storage';
@Injectable()
export class ToDoService{
    todos: Array<{
        title:string,
        note: string,
         date: string
        }>;
        constructor(private storage: Storage){

        }

    addNew(item){
        if(!this.todos) this.todos =[];
        this.todos.push(item);
        this.storage.set('todos',this.todos);
    }

    getAll(){
        return this.storage.get('todos')
        .then((todos) => {
            return todos || [];
        // return this.todos;
    });
    }
}