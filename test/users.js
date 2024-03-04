import { expect } from 'chai';

import request from '../config/common.js';

const Token =
  'b69ddf993a01d74cec7d50887c09bc845a39d7487876df2e05aa0332d557db86';

var generateRandomEmail = `test${Math.floor(Math.random() * 9999)}@gmail.com`;

// describe('Users', () => {
//   it('GET /users', () => {
//     return request.get(`users?access-token=${Token}`).then((res) => {
//       expect(res.body.data).to.not.be.empty;
//     });
//   });
// });

// describe('Users', () => {
//   it('GET /users/:id', () => {
//     return request.get(`users/6732307?access-token=${Token}`).then((res) => {
//       console.log(res.body);
//       expect(res.body.data).to.not.be.empty;
//     });
//   });
// });

// describe('Users', () => {
//   it('GET /users', () => {
//     return request.get(`users?access-token=${Token}`).then((res) => {
//       console.log(res.body);
//       expect(res.body.data).to.not.be.empty;
//       var count = 0;
//       var arr = res.body.data.map((n) => {
//         if (n.gender === 'female') {
//           if (n.status === 'inactive') {
//             count++;
//           }
//           expect(count).to.be.greaterThan(0);
//         }
//       });
//     });
//   });
// });

// it('POST  /users', () => {
//   const data = {
//     name: 'Gurjot Singh A',
//     email: generateRandomEmail,
//     gender: 'male',
//     status: 'active',
//   };
//   console.log(data.email);

//   return request
//     .post('users')
//     .set('Authorization', `Bearer ${Token}`)
//     .send(data)
//     .then((res) => {
//       console.log(res.body);
//       expect(res.statusCode).to.equal(200);
//       expect(res.body.data).to.not.be.empty;
//       expect(res.body.data).to.deep.include(data);
//     });
// });

// it('PUT users', () => {
//   const data = {
//     status: 'Active',
//   };

//   return request
//     .put('users/6750598')
//     .set('Authorization', `Bearer ${Token}`)
//     .send(data)
//     .then((res) => {
//       console.log(res.body);
//       expect(res.statusCode).to.equal(201);
//       expect(res.body).to.not.be.empty;
//     });
// });

// it('DELETE  /users', () => {
//   return request
//     .delete(`users/${userId}`)
//     .set('Authorization', `Bearer ${Token}`)
//     .then((res) => {
//       expect(res.statusCode).to.equal(204);
//     });
// });
