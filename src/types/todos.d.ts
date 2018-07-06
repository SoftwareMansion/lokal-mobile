declare module 'service-entities/todos' {
	import {TimestampedEntity} from 'service-entities/timestamped-entity';

	export interface CreateTodoEntity {
		task: string;
		status?: string;
	}

	export interface TodoEntity extends CreateTodoEntity, TimestampedEntity {
		_id: string;
	}
}