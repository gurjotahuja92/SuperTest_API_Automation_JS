import { expect } from 'chai';

import request from '../config/common.js';
import { faker } from '@faker-js/faker';
import 'dotenv/config';
const Token = process.env.USER_TOKEN;

var generateRandomEmail = `test${Math.floor(Math.random() * 9999)}@gmail.com`;

describe('E2E test for create user - get user - update user and delete user', () => {
  var userId;
  it('POST  /users', () => {
    const data = {
      name: 'Gurjot',
      email: generateRandomEmail,
      gender: 'male',
      status: 'active',
    };
    console.log(data.email);

    return request
      .post('users')
      .set('Authorization', `Bearer ${Token}`)
      .send(data)
      .then((res) => {
        console.log(res.body);
        // expect(res.statusCode).to.equal(201);
        expect(res.body).to.not.be.empty;
        expect(res.body).to.deep.include(data);
        userId = res.body.id;
        console.log(userId);
      });
  });

  it('GET /users/:id', () => {
    return request.get(`users/${userId}?access-token=${Token}`).then((res) => {
      console.log(res.body);
      expect(res.body).to.not.be.empty;
    });
  });

  it('PUT users', () => {
    const data = {
      status: 'Inactive',
    };

    return request
      .put(`users/${userId}`)
      .set('Authorization', `Bearer ${Token}`)
      .send(data)
      .then((res) => {
        console.log(res.body);
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.not.be.empty;
      });
  });

  it('DELETE users', () => {
    return request
      .delete(`users/${userId}`)
      .set('Authorization', `Bearer ${Token}`)
      .then((res) => {
        console.log(res.body);
        expect(res.statusCode).to.equal(204);
        expect(res.body).to.be.empty;
      });
  });
});
