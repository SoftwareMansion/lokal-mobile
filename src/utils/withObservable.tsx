import React from 'react';
import { Observable, Subscription } from 'rxjs';


interface WithObservableState<S> {
	wrappedComponentProps?: S;
}

// source: https://github.com/slively/fullstack-typescript/blob/master/ui/src/lib/withObservable.tsx
export function withObservable<P>(observable: Observable<P>) {
	return (WrappedComponent: React.ComponentClass<P>, displayName?: string) => {
		const wrappedComponentDisplayName = displayName || `WithObservable(${WrappedComponent.displayName || WrappedComponent.name}`;
		return class WithObservable extends React.PureComponent<{}, WithObservableState<P>> {
			static displayName = wrappedComponentDisplayName;

			subscription?: Subscription;

			componentDidMount() {
				this.subscription = observable.subscribe((wrappedComponentProps: P) => {
					this.setState({wrappedComponentProps});
				});
			}

			componentWillUnmount() {
				if (this.subscription) {
					this.subscription.unsubscribe();
				}
			}

			render() {
				if (this.state == null) {
					return null;
				}

				return React.createElement(WrappedComponent, Object.assign({}, this.props, this.state.wrappedComponentProps));
			}
		};
	};
}