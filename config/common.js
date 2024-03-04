import supertest from 'supertest';
import qaConfig from '../config/qaConfig.js';

const request = supertest(qaConfig.baseUrl);

export default request;
