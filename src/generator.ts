import { availableFields } from "./fields";

export function generateData(fields: string[]) {
    return fields.map((field) => {
        const generator = availableFields[field];
        if (!generator) {
            throw new Error(`Field "${field}" is not supported.`);
        }
        return { [field]: generator() };
    });
}
