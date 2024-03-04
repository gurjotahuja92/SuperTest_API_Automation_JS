import request from '../config/common.js';
import { faker } from '@faker-js/faker';
import 'dotenv/config';

// const Token =
//   'b69ddf993a01d74cec7d50887c09bc845a39d7487876df2e05aa0332d557db86';

const Token = process.env.USER_TOKEN;

// var generateRandomEmail = `test${Math.floor(Math.random() * 9999)}@gmail.com`;

export const createRandomUser = async () => {
  const data1 = {
    name: faker.person.firstName(),
    email: faker.internet.email(),
    gender: 'male',
    status: 'active',
  };

  const res = await request
    .post('users')
    .set('Authorization', `Bearer ${Token}`)
    .send(data1);
  return res.body.id;
};
