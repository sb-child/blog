import dayjs from 'dayjs';

export let currentTheme: 'normal' | 'death' = 'normal';

export function setCurrentTheme(x: 'normal' | 'death') {
  currentTheme = x;
}

// import React from "react";
// React.useState();
export type PostInfo = {
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

function getPosts(hide?: boolean) {
  const h = hide === undefined ? false : hide;
  const posts: PostInfo[] = (window as any).__post_routes;
  const postsFiltered: PostInfo[] = posts.filter((v) => {
    return !h || v.hide === false;
  });
  return postsFiltered;
}

export function findPost(pathName: string): PostInfo | undefined {
  switch (pathName) {
    case '/':
      return {
        title: '首页',
        folder: 'layout',
        createdAt: 0,
        updatedAt: 0,
        hide: false,
        desc: '',
        tags: [],
        nextUrl: '',
        suggest: [],
        component: '@/home/Root',
        url: '/',
        fileName: '@/home/Root.tsx',
      };
    case '/tools':
      return {
        title: '神奇工具',
        folder: 'layout',
        createdAt: 0,
        updatedAt: 0,
        hide: false,
        desc: '',
        tags: [],
        nextUrl: '/',
        suggest: [],
        component: '@/home/Tools',
        url: '/tools',
        fileName: '@/home/Tools.tsx',
      };
    case '/friends':
      return {
        title: '友情链接',
        folder: 'layout',
        createdAt: 0,
        updatedAt: 0,
        hide: false,
        desc: '',
        tags: [],
        nextUrl: '/',
        suggest: [],
        component: '@/home/Friends',
        url: '/friends',
        fileName: '@/home/Friends.tsx',
      };
    case '/articles':
      return {
        title: '文章列表',
        folder: 'layout',
        createdAt: 0,
        updatedAt: 0,
        hide: false,
        desc: '',
        tags: [],
        nextUrl: '/',
        suggest: [],
        component: '@/home/Articles',
        url: '/articles',
        fileName: '@/home/Articles.tsx',
      };
    case '/death':
      return {
        title: '色天堂',
        folder: 'layout',
        createdAt: 0,
        updatedAt: 0,
        hide: false,
        desc: '',
        tags: [],
        nextUrl: '/',
        suggest: [],
        component: '@/home/Death',
        url: '/death',
        fileName: '@/home/Death.tsx',
      };
    default:
      break;
  }
  const posts = getPosts();
  return posts.find((v, _i, _a) => {
    return v.url === pathName;
  });
}

export function fetchPostsByCreateTime(
  order: 'up' | 'down',
  notHidden: boolean,
): {
  [key: string]: PostInfo[];
} {
  const posts = getPosts(notHidden);
  const postsByDay: { [key: string]: PostInfo[] } = {};
  posts
    .sort((a, b) => {
      return order === 'up'
        ? a.createdAt - b.createdAt
        : b.createdAt - a.createdAt;
    })
    .forEach((post) => {
      const createdAtDate = dayjs(post.createdAt).format('YYYY-MM-DD');
      if (!postsByDay[createdAtDate]) {
        postsByDay[createdAtDate] = [];
      }
      postsByDay[createdAtDate].push(post);
    });
  return postsByDay;
}

export function fetchPostsByUpdateTime(
  order: 'up' | 'down',
  notHidden: boolean,
): {
  [key: string]: PostInfo[];
} {
  const posts = getPosts(notHidden);
  const postsByDay: { [key: string]: PostInfo[] } = {};
  posts
    .sort((a, b) => {
      return order === 'up'
        ? a.updatedAt - b.updatedAt
        : b.updatedAt - a.updatedAt;
    })
    .forEach((post) => {
      const updatedAtDate = dayjs(post.updatedAt).format('YYYY-MM-DD');
      if (!postsByDay[updatedAtDate]) {
        postsByDay[updatedAtDate] = [];
      }
      postsByDay[updatedAtDate].push(post);
    });
  return postsByDay;
}

export function getBuildTime() {
  const buildTime: number = (window as any)._BUILD_TIME__NvGiV4LVLpzpI3si;
  if (buildTime <= 0) {
    return '「开发模式」';
  }
  return dayjs(buildTime).format('YYYY-MM-DD HH:mm:ss Z');
}

export function getDev() {
  const buildTime: number = (window as any)._BUILD_TIME__NvGiV4LVLpzpI3si;
  if (buildTime <= 0) {
    return true;
  }
  return false;
}

export function toTimeStr(t: number) {
  if (t <= 0) {
    return '未知';
  }
  return dayjs(t).format('YYYY-MM-DD HH:mm:ss Z');
}
