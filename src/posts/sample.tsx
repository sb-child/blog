// import codeSample from '@/assets/code/4SI9fYft6dvX0kTg-1.txt';
// import imgSample from '@/assets/images/posts/2.png';
import Anim from '@/components/animated';
import { Divider, Typography } from 'antd';

/// title: {{title}}
/// desc: {{desc}}
/// folder: {{folder}}
/// tags: {{tags}}
/// next: {{next}}
/// sugg: {{suggest}}
/// create: {{createTime}}
/// update: {{updateTime}}
/// hide

export default function Content(props: {}) {
  return (
    <Anim k="p_sample">
      {/* <Link to={'/posts/folder1/111'}>sample</Link> */}
      <Typography.Title level={2}>标题</Typography.Title>
      <Typography.Paragraph>正文...</Typography.Paragraph>
      <Divider />
      <Typography.Title level={2}>标题2</Typography.Title>
      <Typography.Paragraph>正文2...</Typography.Paragraph>
      <Divider />
      {/* <Typography.Title level={2}>代码</Typography.Title>
      <Typography.Paragraph>
        <code>src/.vuepress/config.ts</code>:
        <br />
        <CodeView language="typescript" file={code1} />
        <br />
        <code>src/U9vTG9N4_openvscode/README.md</code>:
        <br />
        <CodeView language="markdown" file={code2} />
      </Typography.Paragraph> */}
    </Anim>
  );
}
