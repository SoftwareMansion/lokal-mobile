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
    // const todoEntity: TodoEntity[] = [{ _id: '1', task: 'gre' }];
    // this.todos.next(todoEntity);
    console.log('refresh');
    return this.service.find().then((todos: TodoEntity[]) =>
      this.todos.next(todos)
    );
  }
    // add the todo to the server and prepend it to our todos list
  readonly addTodo = (todo: CreateTodoEntity) => {
    // const addedTodo: TodoEntity = {...todo, id: i };
    i++;
    // this.todos.next([addedTodo, ...this.todos.value])
    todo.status = 'pending';
    return this.service.create(todo).then(
        (addedTodo: TodoEntity) =>
          this.todos.next([addedTodo, ...this.todos.value])
    );
  }

  readonly completeTodo = (item: TodoEntity) => {
    // const addedTodo: TodoEntity = {...todo, id: i };
    // i++;
    // this.todos.next([addedTodo, ...this.todos.value])
    // todo.status = 'pending';
    const updateObject = { _id: item._id, task: item.task, status: 'completed' };
    return this.service.replace(item._id, updateObject).then(
        (addedTodo: TodoEntity) =>
          this.refresh()
          // this.todos.next([addedTodo, ...this.todos.value])
    );
  }

  readonly removeTodo = (id: string) => {
    // const addedTodo: TodoEntity = {...todo, id: i };
    // i++;
    // this.todos.next([addedTodo, ...this.todos.value])
    // todo.status = 'pending';
    return this.service.delete(id).then(
        () =>
          this.refresh()
          // this.todos.next([addedTodo, ...this.todos.value])
    );
  }
}

export const todosListStore = new TodosListStore();