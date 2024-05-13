import express from 'express';
//import * as core from 'express-serve-static-core';
//import HttpStatusCodes from '@app/constants/HttpStatusCodes';

const router = express.Router()

export interface IApiA {
  message: string;
}

export interface IApiAReq<T = void> extends express.Request {
  body: T;
}

export interface IApiARes extends express.Response {
  locals: Record<string, unknown>;
}

/**
 * 
 */
async function ApiA(_: IApiAReq<{ a: IApiA}>, res: IApiARes) {
  console.log("api-a: v0.1.11");
  //console.log(req);
  //return res.status(200).send("api-a" + a.message);
  //return res.send("api-a" + b.message);
  return res;
}

router.get('/', ApiA);

export default router;
