import { v7 as uuidv7, v4 as uuidv4 } from "uuid";

for (let i = 0; i < 2; i++) {
    const v = uuidv7()
    console.log(`UUIDv7: `, v, v.replaceAll('-', ''));
}

for (let i = 0; i < 2; i++) {
    const v = uuidv4();
    console.log(`UUIDv4: `, v, v.replaceAll('-', ''));
}
