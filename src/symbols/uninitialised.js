/**
 * == DataUndefinedSym
 * @internal
 */
const __da62a41989a449a2ae3c2174ecbfc126 = Symbol("(MoreRoID\0:DataUninitialised)");
export default __da62a41989a449a2ae3c2174ecbfc126;

/**
 * == __internal_throwIfDataUninitialisedSym
 * @internal
 * Generate the hash key for a RoID
 */
export function __16ad663dc2334d059a78c4606b9f1773(name, value, message) {
    if (message === undefined)
        message = `Recieved uninitialised data: ${name} === ${String(__da62a41989a449a2ae3c2174ecbfc126)}`;
    if (value === __da62a41989a449a2ae3c2174ecbfc126)
        throw new TypeError(message);
}
