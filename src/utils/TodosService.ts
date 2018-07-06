import {CrudService} from './CrudService';
import {TodoEntity, CreateTodoEntity} from 'service-entities/todos';

export const todosService = new CrudService<TodoEntity, CreateTodoEntity>('http://sebs.local:3000/todos');