import {CrudService} from './CrudService';
import {TodoEntity, CreateTodoEntity} from 'service-entities/todos';

export const todosService = new CrudService<TodoEntity, CreateTodoEntity>('http://angelika.local:3000/todos');