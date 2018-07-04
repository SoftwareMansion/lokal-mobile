import {todosService} from '../utils/TodosService';
import {BehaviorSubject} from 'rxjs';
import {CreateTodoEntity, TodoEntity} from 'service-entities/todos';

let i = 1;
export class TodosListStore {

  constructor(
    readonly todos = new BehaviorSubject<TodoEntity[]>([]),
    private service = todosService
  ) {
  }
  // fetch todos from the server and update the value of todos
  readonly refresh = () => {
    const todoEntity: TodoEntity[] = [{ id: 1, text: 'gre' }];
    // this.todos.next(todoEntity);
    console.log('refresh');
    return this.service.find().then((todos: TodoEntity[]) =>
      this.todos.next(todos)
    );
  }
    // add the todo to the server and prepend it to our todos list
  readonly addTodo = (todo: CreateTodoEntity) => {
    const addedTodo: TodoEntity = {...todo, id: i };
    i++;
    this.todos.next([addedTodo, ...this.todos.value])
    // return this.service.create(todo).then(
    //     (addedTodo: TodoEntity) =>
    //       this.todos.next([addedTodo, ...this.todos.value])
    // );
  }
}

export const todosListStore = new TodosListStore();