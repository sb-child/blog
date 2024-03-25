import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { IApi, IRoute } from 'umi';

const URL_PREFIX = 'https://sbchild.top/blog';

type PostInfo = {
  title: string;
  folder: string;
  createdAt: number;
  updatedAt: number;
  hide: boolean;
  desc: string;
  tags: string[];
  nextUrl: string;
  suggest: string[];
  component: string;
  url: string;
  fileName: string;
};

function execRegex(regex: RegExp, s: string) {
  let matches: { [key: number]: string }[] = [];
  let m;
  while ((m = regex.exec(s)) !== null) {
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }
    let matchObj: { [key: number]: string } = {};
    m.forEach((match, groupIndex) => {
      matchObj[groupIndex] = match;
    });
    matches.push(matchObj);
  }
  return matches;
}

function splitTagsMatches(
  s: {
    [key: number]: string;
  }[],
) {
  if (s.length === 0) {
    return [];
  }
  let t: string[] = [];
  s.forEach((v, _i, _a) => {
    t = t.concat(v[1].split(','));
  });
  t = t.map((v, _i, _a) => {
    return v.trim();
  });
  return t;
}

function convertToTimestamp(input: string | number): number {
  let timestamp: number;
  if (typeof input === 'string') {
    if (/^\d+$/.test(input)) {
      timestamp = parseInt(input, 10);
    } else {
      timestamp = Math.floor(Date.parse(input));
    }
  } else if (typeof input === 'number') {
    timestamp = input;
  } else {
    throw new Error(
      'Invalid input type. Please provide a valid date string or timestamp in seconds.',
    );
  }
  return timestamp;
}

function summary(fileName: string, content: string) {
  const titleRegex = execRegex(/^\/\/\/ title: (.*$)/gm, content);
  const folderRegex = execRegex(/^\/\/\/ folder: (.*$)/gm, content);
  const descRegex = execRegex(/^\/\/\/ desc: (.*$)/gm, content);
  const createdRegex = execRegex(/^\/\/\/ create: (.*$)/gm, content);
  const updatedRegex = execRegex(/^\/\/\/ update: (.*$)/gm, content);
  const hideRegex = execRegex(/^\/\/\/ hide\s*$/gm, content);
  const tagsRegex = execRegex(/^\/\/\/ tags: (.*$)/gm, content);
  const nextRegex = execRegex(/^\/\/\/ next: (.*$)/gm, content);
  const suggestRegex = execRegex(/^\/\/\/ sugg: (.*$)/gm, content);
  const p: PostInfo = {
    title: titleRegex.length === 0 ? '' : titleRegex[0][1].trim(),
    folder: folderRegex.length === 0 ? '' : folderRegex[0][1].trim(),
    desc: descRegex.length === 0 ? '' : descRegex[0][1].trim(),
    createdAt:
      createdRegex.length === 0
        ? -1
        : convertToTimestamp(createdRegex[0][1].trim()),
    updatedAt:
      updatedRegex.length === 0
        ? -1
        : convertToTimestamp(updatedRegex[0][1].trim()),
    hide: hideRegex.length !== 0,
    tags: splitTagsMatches(tagsRegex),
    nextUrl: nextRegex.length === 0 ? '' : nextRegex[0][1].trim(),
    suggest: splitTagsMatches(suggestRegex),
    url: '/posts/' + fileName.replace('.tsx', ''),
    component: '@/posts/' + fileName,
    fileName: fileName,
  };
  return p;
}

function findPosts() {
  const dir = './src/posts';
  const regex = /\.tsx$/;
  let posts: PostInfo[] = [];
  const search = (parent: string) => {
    const fileNames = fs.readdirSync(parent);
    fileNames.forEach((fileName) => {
      const filePath = path.join(parent, fileName);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        search(filePath);
      } else if (stat.isFile() && regex.test(fileName)) {
        const content = fs.readFileSync(filePath, 'utf-8');
        const rel = path.relative(dir, filePath);
        posts.push(summary(rel, content));
      }
    });
  };
  search(dir);
  return posts;
}

export default async (api: IApi) => {
  api.describe({
    key: 'inject',
    config: {
      schema(joi) {
        return joi.object();
      },
    },
    enableBy: api.EnableBy.config,
  });
  api.modifyHTML(($) => {
    $('head').append([`<title>色妹妹的船新博客!</title>`]);
    $('#root').append([`<div class="__first_screen_bg"></div>`]);
    $('.__first_screen_bg').append([`<div class="__first_screen_box"></div>`]);
    $('.__first_screen_box').append([
      `<div class="__first_screen_title_box"></div>`,
      `<div class="__first_screen_text_box"></div>`,
    ]);
    $('.__first_screen_title_box').append([
      `<div class="__first_screen_title">提示</div>`,
    ]);
    $('.__first_screen_text_box').append([
      `<div class="__first_screen_text">哎呀~ 快快把这个网站放进白名单~~</div>`,
      `<div class="__first_screen_text">现在我的 JavaScript 蠢蠢欲动~</div>`,
    ]);
    return $;
  });
  api.addHTMLStyles(() => {
    // api.logger.info('Insert CSS...');
    const cssFile = fs.readFileSync('./src/plugins/inj.css');
    return cssFile.toString('utf8');
  });
  // api.modifyHTML(($) => {
  //   const jsFile = fs.readFileSync('./src/plugins/inj.js');
  //   $('#root').after([
  //     `<script type="application/json">` +
  //       jsFile.toString('utf8') +
  //       `</script>`,
  //   ]);
  //   return $;
  // });
  api.addHTMLScripts(() => {
    // api.logger.info('Insert JS...');
    const jsFile = fs.readFileSync('./src/plugins/inj.js');
    const content = jsFile.toString('utf8');
    if (process.env.NODE_ENV !== 'development') {
      const regex =
        // eslint-disable-next-line no-useless-escape
        /^const\ YES_IT_IS_PROD_MODE_UNLESS_YOU_CAN_CHANGE_ME__UgVyolk07spJPsHG\ =\ false;$/gm;
      const rep =
        'const YES_IT_IS_PROD_MODE_UNLESS_YOU_CAN_CHANGE_ME__UgVyolk07spJPsHG = true;';
      const result = content.replace(regex, rep);
      return result;
    }
    return content;
  });
  api.addHTMLMetas(() => {
    return {
      name: 'keywords',
      content:
        'sbchild, sb-child, blog, 色妹妹的船新博客, 色妹妹, 船新博客, 博客, 涩妹妹, 涩妹妹的船新博客',
    };
  });
  api.addHTMLMetas(() => {
    return {
      name: 'author',
      content: 'sbchild',
    };
  });
  api.addHTMLMetas(() => {
    return {
      name: 'description',
      content: '色妹妹的船新博客',
    };
  });
  api.modifyHTMLFavicon({
    fn: (_x, _y) => {
      return ['/blog/favicon.ico'];
    },
  });
  api.modifyRoutes((memo) => {
    let newRoute: { [key: string]: IRoute } = {};
    let rootId = '';
    Object.keys(memo).forEach((id) => {
      const route = memo[id];
      if (!route.path.startsWith('/posts')) {
        newRoute[id] = route;
      }
      if (route.path === '/') {
        rootId = id;
      }
    });
    const posts = findPosts();
    // api.logger.info(posts);
    newRoute['_post_'] = {
      absPath: '/posts',
      path: 'posts',
      id: '_post_',
      parentId: rootId,
    };
    posts.forEach((e, i, _a) => {
      const postId = '_post_' + i;
      newRoute[postId] = {
        absPath: e.url,
        path: e.fileName.replace('.tsx', ''),
        file: e.component,
        id: postId,
        parentId: '_post_',
      };
    });
    // api.logger.info(newRoute);
    return newRoute;
  });
  api.addHTMLHeadScripts(() => {
    // route table for "/posts"
    const posts = findPosts();
    const script =
      "window.__post_routes=JSON.parse('" + JSON.stringify(posts) + "');";
    return script;
  });
  function findDistResources() {
    const dir = './dist';
    const regex = /\.(js|css|txt|html)$/;
    let files: string[] = [];
    const search = (parent: string) => {
      const fileNames = fs.readdirSync(parent);
      fileNames.forEach((fileName) => {
        const filePath = path.join(parent, fileName);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
          search(filePath);
        } else if (stat.isFile() && regex.test(fileName)) {
          const rel = path.relative(dir, filePath);
          files.push(rel);
        }
      });
    };
    search(dir);
    return files;
  }
  function randString(): string {
    const timestamp = new Date().getTime().toString();
    const randomBytes = Array.from(crypto.getRandomValues(new Uint8Array(8)))
      .map((byte) => byte.toString(16).padStart(2, '0'))
      .join('');
    return timestamp + randomBytes;
  }
  api.onBuildHtmlComplete((_args: {}) => {
    const indexHtml = './dist/index.html';
    const buildIdFile = 'build_' + randString() + '.txt';
    const buildIdContent = randString();
    let indexHtmlContent = fs
      .readFileSync('./dist/index.html')
      .toString('utf8');
    const distObj = { list: findDistResources() };
    const distJson = JSON.stringify(distObj);
    let regex =
      // eslint-disable-next-line no-useless-escape
      /^const\ AND_THIS_IS_PRODUCTION_FILES__0sUAUaI9Wo7LcFCC\ =\ \{\};$/gm;
    let rep =
      "const AND_THIS_IS_PRODUCTION_FILES__0sUAUaI9Wo7LcFCC = JSON.parse('" +
      distJson +
      "');";
    let result = indexHtmlContent.replace(regex, rep);
    // eslint-disable-next-line no-useless-escape
    regex =
      // eslint-disable-next-line no-useless-escape
      /^const\ FINALLY_THIS_IS_THE_BUILD_ID_AND_DONT_CHANGE_IT__5CapX6vlkVv6ZvqB\ =\ \{\};$/gm;
    rep =
      "const FINALLY_THIS_IS_THE_BUILD_ID_AND_DONT_CHANGE_IT__5CapX6vlkVv6ZvqB = JSON.parse('" +
      JSON.stringify({ f: buildIdFile, c: buildIdContent }) +
      "');";
    result = result.replace(regex, rep);
    // window._BUILD_TIME__NvGiV4LVLpzpI3si = -1;
    // eslint-disable-next-line no-useless-escape
    regex = /^window\._BUILD_TIME__NvGiV4LVLpzpI3si\ =\ -1;$/gm;
    rep =
      'window._BUILD_TIME__NvGiV4LVLpzpI3si = ' + Date.now().toString() + ';';
    result = result.replace(regex, rep);
    fs.writeFileSync(indexHtml, result);
    fs.writeFileSync('./dist/' + buildIdFile, buildIdContent);
  });

  api.onBuildHtmlComplete((_args: {}) => {
    const posts = findPosts();
    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    // todo
    for (const route of ['', '/friends', '/tools', '/tools/duo', '/articles']) {
      sitemap += '<url>\n';
      sitemap += `<loc>${URL_PREFIX + route}</loc>\n`;
      sitemap += `<changefreq>always</changefreq>\n`;
      sitemap += '</url>\n';
    }
    for (const route of posts) {
      if (route.hide) {
        continue;
      }
      sitemap += '<url>\n';
      sitemap += `<loc>${URL_PREFIX + route.url}</loc>\n`;
      sitemap += `<changefreq>always</changefreq>\n`;
      sitemap += '</url>\n';
    }
    sitemap += '</urlset>';
    fs.writeFileSync('./dist/sitemap.xml', sitemap);
  });
};
