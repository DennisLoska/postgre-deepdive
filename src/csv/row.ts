export function rowify(item: object, pos: number) {
    let row = "";

    const keys = Object.keys(item);

    if (pos === 1) {
        const header = keys.toString();
        row = row.concat(`${header}\n`);
    }

    for (let i = 0; i < keys.length; i++) {
        const col = item[keys[i]];
        if (col instanceof Date) row = row.concat(`${col.toISOString()},`);
        else row = row.concat(`${col},`);

        if (i === keys.length - 1) {
            row = row.slice(0, -1);
        }
    }

    return `${row}\n`;
}
