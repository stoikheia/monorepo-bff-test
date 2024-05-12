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
async function ApiB(req: IApiBReq<{ b: IApiB}>, res: IApiBRes) {
  const { b } = req.body;
  console.log(b.message+"v0.1.2");
  return res;
}

router.get('/', ApiB);

export default router;
