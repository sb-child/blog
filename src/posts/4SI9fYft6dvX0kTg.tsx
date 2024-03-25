import code1 from '@/assets/code/4SI9fYft6dvX0kTg-1.txt';
import code2 from '@/assets/code/4SI9fYft6dvX0kTg-2.txt';
import img2 from '@/assets/images/posts/2.png';
import img3 from '@/assets/images/posts/3.png';
import img4 from '@/assets/images/posts/4.png';
import img5 from '@/assets/images/posts/5.png';
import { Card, Divider, Image, Typography } from 'antd';
// import MainCss from '../MainCss.json';
import CodeView from '@/components/CodeView';
import Anim from '@/components/animated';
import { Link } from 'umi';

/// title: [教程]让 VuePress 页面的编辑链接跳转到 VSCode
/// desc: 能用就行哦
/// folder: docs/文档
/// tags: website,vscode,programming,vuepress,vue,javascript,typescript
/// next: /
/// sugg: react, vue
/// create: 2022-10-17
/// update: 2023-09-27 16:08:48

export default function Content(props: {}) {
  return (
    <Anim k="p_4SI9fYft6dvX0kTg" className="__content__">
      <Link to={'/posts/folder1/111'}>2222</Link>
      <Typography.Title level={2}>前言</Typography.Title>
      <Typography.Paragraph>
        在 <code>src/.vuepress/config.ts</code> 中的{' '}
        <code>editLinkPattern</code> 并不可以直接设置为
        <code>vscode://xxx</code>, 因为这样会让实际的link多出来{' '}
        <code>https://</code> 这个前缀
        <br />
        所以使用某某魔法来 hack 1 下~
      </Typography.Paragraph>
      <Divider />
      <Typography.Title level={2}>效果</Typography.Title>
      <Typography.Paragraph>
        先康康效果吧:
        <br />
        <Card title="开发模式" size="small">
          <Image src={img2} />
          <br />
          跳转页面:
          <br />
          <Image src={img4} />
          <br />
          然后就打开vscode啦:
          <br />
          <Image src={img5} />
        </Card>
        <br />
        <Card title="部署模式" size="small">
          <Image src={img3} />
          <br />
          这个链接指向本站代码存储库
        </Card>
      </Typography.Paragraph>
      <Divider />
      <Typography.Title level={2}>代码</Typography.Title>
      <Typography.Paragraph>
        <code>src/.vuepress/config.ts</code>:
        <br />
        <CodeView language="typescript" file={code1} />
        <br />
        <code>src/U9vTG9N4_openvscode/README.md</code>:
        <br />
        <CodeView language="markdown" file={code2} />
      </Typography.Paragraph>
    </Anim>
  );
}
