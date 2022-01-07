import faker = require("faker");

import { User } from "../../@types/user";

export const makeUser = (): User => {
  return {
    address: faker.address.city(),
    birthday: faker.datatype.datetime().toDateString(),
    email: faker.internet.email(),
    id: faker.datatype.uuid(),
    name: faker.name.firstName() + faker.name.lastName(),
    phone: faker.phone.phoneNumber()
  };
};
