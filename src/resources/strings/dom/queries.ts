import DeepFreeze from "../../../utils/access/deepfreeze";

/**
 * All queries made by the library
 * @internal
 */
export const Queries = DeepFreeze({
    Navigation: {
        Leftnav: {
            Container: `#left-navigation-container`,
            MainDiv: `#left-navigation-container div:has(> nav > ul)`,
            Abovemenu: {
                Profile: {
                    Container: `#left-navigation-container nav > ul > li:has(> a[href$="/users/profile"])`,
                    Href: `#left-navigation-container nav > ul > li > a[href$="/users/profile"]`
                }
            },
            Menu: {
                // ...
            },
            Submenu: {
                // ...
            }
        }
    }
});
