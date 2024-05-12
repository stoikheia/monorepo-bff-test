import express from 'express';

const router = express.Router()

export interface IApiB {
  message: string;
}

export interface IApiBReq<T = void> extends express.Request {
  body: T;
}

export interface IApiBRes extends express.Response {
  locals: Record<string, unknown>;
}

/**
 * 
 */
async function ApiB(_: IApiBReq<{ a: IApiB}>, res: IApiBRes) {
  console.log("v0.1.3");
  return res;
}

router.get('/', ApiB);

export default router;
