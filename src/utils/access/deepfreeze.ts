/** @internal */
type DeepReadonly<T> = { readonly [K in keyof T]: DeepReadonly<T[K]>; };

/**
 * Perform a recursive Object.freeze() on any nested object
 * @internal
 */
export default function DeepFreeze<T>(obj: T): DeepReadonly<T> {
    if (obj === null || typeof obj !== 'object')
        return Object.freeze(obj);

    const record = obj as Record<string, unknown>;

    if (typeof obj === 'object') {
        for (const key of Object.keys(obj)) {
            record[key] = DeepFreeze(record[key]);
        }
    }

    return Object.freeze(obj);
}
