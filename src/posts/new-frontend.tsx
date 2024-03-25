/// title: 新的 Blog 前端页面
/// desc: 好耶!
/// folder: welcome/欢迎页
/// tags: website,programming,React,javascript,typescript
/// next: /
/// sugg: React
/// create: 2023-09-27 23:51:20
/// update: 2023-09-27 23:51:20

import Anim from '@/components/animated';
import { Typography } from 'antd';

export default function Content(props: {}) {
  return (
    <Anim k="p_new-frontend">
      <Typography.Title>好耶</Typography.Title>
      <Typography.Paragraph>
        虽然还有挺多todo, 但是是时候写个新的欢迎页啦~
      </Typography.Paragraph>
      <Typography.Title level={3}>Todo List</Typography.Title>
      <Typography.Paragraph>当然是有很多显而易见的todo啦</Typography.Paragraph>
    </Anim>
  );
}
