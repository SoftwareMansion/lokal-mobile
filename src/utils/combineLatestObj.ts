import {Observable, combineLatest, of } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';

type ObservableMap<T> = {
	[K in keyof T]: Observable<T[K]> | T[K];
	};

export default function combineLatestObj<T>(observablesMap: ObservableMap<T>) {
	const observablesList = Object.keys(observablesMap)
		.map((key: string) => {
      const value: any = (observablesMap as any)[key];
			// TODO: why is Observable...map(...) sometimes not instanceof Observable?
			return value instanceof Observable || 'subscribe' in value
				? value.pipe(map((v: Observable<any>) => ({[key]: v})))
				: of({[key]: value}); // values are passed through
    });

	return combineLatest(observablesList)
		.pipe(
      map((observables: object[]) => reduceObservablesToValue<T>(observables)),
      distinctUntilChanged<T>()
    )
}

function reduceObservablesToValue<T>(values: object[]): T {
	const result: T = <T> {};
	return values.reduce(
		(acc: T, obs: object) => {
			Object.keys(obs).forEach((key: string) => {
				(acc as any)[key]  = (obs as any)[key];
			});

			return acc;
		},
		result
	);
}