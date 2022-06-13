import { AnyAction } from 'redux';

//!!type predicate
// type Alien = {
// 	fly: () => {};
// };
// type Human = {
// 	speak: () => {};
// };

// function isHuman(entity: Human | Alien): entity is Human {
// 	return (entity as Human).speak !== undefined;
// }

// const Josh = 'josh';
// if (isHuman(Josh)) {
// 	Josh.speak();
// }

//!!intersection types

// type Alien = {
// 	fly: () => void;
// };
// type Human = {
// 	name: string;
// };
// type Hybrid = Human & Alien;

// const Josh: Hybrid = {
// 	name: 'josh',
// 	fly: () => {},
// };
//!!return type
// type Human = {
// 	name: string;
// };
// type MyFunc = () => Human;

// type MyReturn = ReturnType<MyFunc>;

//!matchable

type Matchable<AC extends () => AnyAction> = AC & {
	type: ReturnType<AC>['type'];
	match(action: AnyAction): action is ReturnType<AC>;
};

export function withMatcher<AC extends () => AnyAction & { type: string }>(actionCreator: AC): Matchable<AC>;

export function withMatcher<AC extends (...args: any[]) => AnyAction & { type: string }>(actionCreator: AC): Matchable<AC>;

export function withMatcher(actionCreator: Function) {
	const type = actionCreator().type;
	return Object.assign(actionCreator, {
		type,
		match(action: AnyAction) {
			return action.type === type;
		},
	});
}
//!!action types
export type ActionWithPayload<T, P> = {
	type: T;
	payload: P;
};

export type Action<T> = {
	type: T;
};

//function overloading comes with TS

export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>;

//though we dont expect payload we need to pass same number of parameters VOID
export function createAction<T extends string>(type: T, payload: void): Action<T>;

export function createAction<T extends string, P>(type: T, payload: P) {
	return { type, payload };
}

// export const createAction = (type, payload) => ({ type, payload });
