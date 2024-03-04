import request from '../config/common.js';

import { expect } from 'chai';
import { before } from 'mocha';
import { createRandomUser } from '../helper/user_helper.js';
import { faker } from '@faker-js/faker';
import 'dotenv/config';

// const Token =
//   'b69ddf993a01d74cec7d50887c09bc845a39d7487876df2e05aa0332d557db86';

console.log('my token' + process.env);

const Token = process.env.USER_TOKEN;

describe('User posts', async () => {
  let postId, userId;

  before(async () => {
    userId = await createRandomUser();
  });

  it('POST  /posts', async () => {
    const data = {
      user_id: userId,
      title: faker.lorem.sentence(),
      body: faker.lorem.paragraph(),
    };

    console.log(data);

    const postRes = await request
      .post('posts')
      .set('Authorization', `Bearer ${Token}`)
      .send(data);

    console.log(postRes.body);
    expect(postRes.body).to.deep.include(data);
    postId = postRes.body.id;
    console.log(postId);
  });
});
