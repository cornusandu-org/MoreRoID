import { sha256 } from "js-sha256";
import { v7 as uuidv7 } from "uuid";

import __da62a41989a449a2ae3c2174ecbfc126, { __16ad663dc2334d059a78c4606b9f1773 } from "./symbols/uninitialised.js";

import type { RoID } from "./types/RoID";

let globalUuid: symbol | string = __da62a41989a449a2ae3c2174ecbfc126;

export function Initialise() {
    globalUuid = uuidv7();
}

/**
 * == __internal_GenerateHashKeyFromRoID
 * @internal
 * Generate the hash key for a RoID
 */
function __5f0a4b3c56ca4c75ab874c6a6b6ef6f4(b609447fe05b494b87ad88db4382f956: RoID): string {
    return `(Moreroid\0):[\"${b609447fe05b494b87ad88db4382f956}\",\"${String(globalUuid)}\"]\0`
}

export function ComputeHashForElementMoreRoID(RoID: RoID): string {
    __16ad663dc2334d059a78c4606b9f1773("globalUuid", globalUuid);

    return sha256(__5f0a4b3c56ca4c75ab874c6a6b6ef6f4(RoID));
}
