export function rowify<T extends object>(item: T, pos: number) {
    let row = "";

    const keys = Object.keys(item);

    if (pos === 1) {
        const header = keys.toString();
        row = row.concat(`${header}\n`);
    }

    for (let j = 0; j < keys.length; j++) {
        const col = item[keys[j]];
        if (col instanceof Date) row = row.concat(`${col.toISOString()},`);
        else row = row.concat(`${col},`);
    }

    return `${row}\n`;
}
