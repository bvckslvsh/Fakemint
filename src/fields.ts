import { faker } from "@faker-js/faker";

export const availableFields = {
    id: () => Math.floor(Math.random() * 10000).toString(),
    first_name: () => faker.person.firstName(),
    last_name: () => faker.person.lastName(),
    email: () => faker.internet.email(),
    password_hash: () => faker.string.uuid(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
};
