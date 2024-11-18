import { availableFields } from "./fields";

export function generateData(fields: string[]) {
    return fields.reduce((result, field) => {
        const generator = availableFields[field];
        if (!generator) {
            throw new Error(`Field "${field}" is not supported.`);
        }
        result[field] = generator();
        return result;
    }, {});
}
