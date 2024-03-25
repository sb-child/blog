import * as crypto from 'crypto';
import * as path from 'path';
import { Compiler } from 'webpack';

export class ChecksumPlugin {
  apply(compiler: Compiler): void {
    compiler.hooks.emit.tapAsync('ChecksumPlugin', (compilation, callback) => {
      console.log(process.env.NODE_ENV);
      const fileTypes = /\.(js|css)$/;
      const assets = compilation.assets;
      Object.keys(assets).forEach((filename) => {
        if (fileTypes.test(filename) && (filename.includes('__') || filename.startsWith("umi."))) {
          const asset = assets[filename];
          const content = asset.source();
          const hash = crypto
            .createHash('sha256')
            .update(content)
            .digest('hex')
            .slice(0, 32);
          const ext = path.extname(filename);
          const updatedFilename = filename.replace(ext, `.${hash}${ext}`);
          assets[updatedFilename] = asset;
          delete assets[filename];
        }
      });
      callback();
    });
  }
}
