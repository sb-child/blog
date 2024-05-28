import MonacoEditorWebpackPlugin from 'monaco-editor-webpack-plugin';
import { defineConfig } from 'umi';

export default defineConfig({
  base: '/blog/',
  publicPath: '/blog/',
  // alias: {
  //   '@': '/src',
  // },
  cssMinifier: 'cssnano',
  routes: [
    { path: '/', component: '@/home/Root' },
    { path: '/friends', component: '@/home/Friends' },
    { path: '/tools', component: '@/home/Tools' },
    { path: '/tools/duo', component: '@/tools/Duo' },
    { path: '/articles', component: '@/home/Articles' },
    { path: '/play/:id', component: '@/home/Play' },
    { path: '/game', component: '@/game' },
    { path: '/death', component: '@/home/Death' },
    // { path: '/loading', component: '@/loading' },
    { path: '/*', redirect: '/' }, // 404
    // "/posts" routes will automatic generate by
    // a plugin at ./src/plugins/inject.ts
  ],
  chainWebpack: (memo, args) => {
    memo.plugin('monaco-editor-webpack-plugin').use(
      new MonacoEditorWebpackPlugin({
        languages: [
          'go',
          'cpp',
          'html',
          'css',
          'json',
          'javascript',
          'typescript',
          'markdown',
          'less',
        ],
      }),
    );
    // if (args.env == 'production') {
    //   // memo.plugin('ChecksumPlugin').use(ChecksumPlugin);
    // }
  },
  hash: true,
  plugins: ['./src/plugins/inject.ts'],
  inject: {},
  npmClient: 'pnpm',
  codeSplitting: { jsStrategy: 'granularChunks' },
  esbuildMinifyIIFE: true,
  clientLoader: {},
  mfsu: {
    exclude: [/@sbchild\/.*/],
    chainWebpack(config: any) {
      config.set('experiments', {
        ...config.get('experiments'),
        // syncWebAssembly: true,
        asyncWebAssembly: true,
      });
      const REG = /\.wasm$/;
      config.module.rule('asset').exclude.add(REG).end();
      config.module
        .rule('wasm')
        .test(REG)
        .include.add(/node_modules\/@sbchild/)
        .end()
        .type('webassembly/async')
        .end();
    },
  },
  extraBabelPlugins: [
    [
      'prismjs',
      {
        languages: [
          'javascript',
          'css',
          'markup',
          'markdown',
          'clike',
          'c',
          'cpp',
          'csharp',
          'cshtml',
          'csv',
          'docker',
          'go',
          'gradle',
          'git',
          'ini',
          'java',
          'javadoc',
          'json',
          'json5',
          'jsonp',
          'jsx',
          'kotlin',
          'less',
          'lua',
          'makefile',
          'lua',
          'perl',
          'php',
          'protobuf',
          'renpy',
          'sass',
          'less',
          'typescript',
          'tsx',
          'yaml',
          'css-extras',
        ],
        plugins: ['line-numbers', 'autolinker'],
        theme: 'tomorrow',
        css: true,
      },
    ],
  ],
});
