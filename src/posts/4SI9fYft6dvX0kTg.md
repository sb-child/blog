---
date: 2022-10-17
category:
  - "docs/文档"
tag:
  - "website"
  - "vscode"
  - "programming"
  - "vuepress"
  - "vue"
  - "javascript"
  - "typescript"
lang: "zh-CN"
---

<!-- more -->

# [教程]让 VuePress 页面的编辑链接跳转到 VSCode

## 前言

在 `src/.vuepress/config.ts` 中的 `editLinkPattern` 并不可以直接设置为 `vscode://xxx`, 因为这样会让实际的link多出来 `https://` 这个前缀

所以使用某某魔法来 hack 1 下~

## 效果

先康康效果吧:

<!-- /home/sbchild/sbchild.top/src/res/images/posts/2.png -->
::: info 开发模式:
![img](../res/images/posts/2.png)

跳转页面:
![img](../res/images/posts/4.png)

然后就打开vscode啦:
![img](../res/images/posts/5.png)

而且跳转页面会自动返回，然后刷新
:::

::: info 部署模式:
![img](../res/images/posts/3.png)
这个链接指向本站代码存储库
:::

## 代码

`src/.vuepress/config.ts`:
```ts
import { getDirname, path } from '@vuepress/utils';

const PROD = process.env.NODE_ENV === 'production';
const DIR = getDirname(import.meta.url);

// 需添加或修改的配置项
export default hopeTheme({
  //     换成代码存储库根目录链接
  repo: 'https://my.sbchild.top:81/gl/dypqbb/sbchild.top/-/tree/master',
  repoDisplay: true,
  editLinkPattern: PROD
    // 换成代码存储库的编辑链接, ":branch" 会被替换为下方的 `docsBranch`, ":path" 会被替换为文章的相对位置
    ? 'https://my.sbchild.top:81/gl/dypqbb/sbchild.top/-/edit/:branch/:path'
    : '/U9vTG9N4_openvscode?path=/' + DIR + '/../../:path',
  //         换成代码存储库名
  docsRepo: 'dypqbb/sbchild.top',
  //        换成 `.vuepress` 所在的目录名
  docsDir: 'src',
  //           换成文章所在分支
  docsBranch: 'master',
  editLink: true,
});
```
`src/U9vTG9N4_openvscode/README.md`:

```md
---
date: 2022-10-16
lang: "zh-CN"
article: false
contributors: false
pageview: false
comment: false
lastUpdated: false
editLink: false
---

# [预览模式]自动重定向

::: warning
{{ notice }}
:::

<script setup>
    import { useRouter } from 'vue-router';
    import { ref } from 'vue';
    const PROD = process.env.NODE_ENV === 'production';
    const router = useRouter();
    console.log(router);
    const p = router.currentRoute.value.query.path;
    const notice = ref('请稍等...');
    setTimeout(() => router.back(), 500);
    if(PROD) {
        notice.value = "此网页已部署, 参数将被忽略";
    } else if(p == undefined) {
        notice.value = "path 参数未设置";
    } else {
        const w = 'vscode://file/' + p;
        notice.value = "正在跳转至 " + w + " ...";
        window.open(w, "_self");
        const W = window;
        setTimeout(() => W.location.reload(true), 600);
    }
</script>

```
