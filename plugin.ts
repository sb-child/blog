import type { IApi } from 'umi';

export default (api: IApi) => {
  api.addMiddlewares(()=>{
    return function header(
      req,
      res,
      next,
    ) {
      // api.logger.info("xx");
      res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
      res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
      next();
    }
  });
};