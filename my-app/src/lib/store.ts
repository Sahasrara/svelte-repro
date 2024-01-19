import { writable, type Invalidator, type Subscriber, type Unsubscriber, type Updater, type Writable, type Readable } from "svelte/store";

export interface Name {
    name: string;
}
export class TheStore implements Readable<Name> {
    private _internalWritable: Writable<Name>;

    constructor(name: Name) {
        this._internalWritable = writable<Name>(name);
    }

    subscribe(
        run: Subscriber<Name>,
        invalidate?: Invalidator<Name> | undefined,
    ): Unsubscriber {
        return this._internalWritable.subscribe(run, invalidate);
    }

    set(newName: Name) {
        this._internalWritable.set(newName);
    }
}
export const store: TheStore = new TheStore({name: 'Rich'});