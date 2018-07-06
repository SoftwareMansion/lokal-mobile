import { TodosListComponent, TodosListComponentProps } from './components/TodosListComponent';
import { todosListStore } from './store/TodosListStore';
import {withObservable} from './utils/withObservable';
import combineLatestObj from './utils/combineLatestObj';

const TodosListObservable = combineLatestObj<TodosListComponentProps>(todosListStore);

const TodosList = withObservable<TodosListComponentProps>(TodosListObservable)(TodosListComponent);
export default TodosList;