import Anim from '@/components/animated';
import { Divider, Typography } from 'antd';

/// title: Something sadly
/// desc: 一些奇怪又sadly的随笔
/// folder: essay/随笔
/// tags: sad
/// next: /
/// sugg: sad
/// create: 2023-11-27 18:24:45
/// update: 2023-11-28 03:54:36

export default function Content(props: {}) {
  return (
    <Anim k="p_sth-sad">
      <Typography.Title level={2}></Typography.Title>
      <Typography.Paragraph>感觉最近状态好差，有些头晕。</Typography.Paragraph>
      <Typography.Paragraph>
        活着的意义是捉摸不透的，但是大多数人惧怕死亡，也许正是「适者生存」之意。但死亡并不是终点，死亡是无助地呐喊，是一种逃脱，是一种永恒。
      </Typography.Paragraph>
      <Typography.Paragraph>
        但是听说死去的人们都变成了天空中一颗颗小星星，有被命名的，也有无名氏。坐在海滩上，殊不知每一粒沙子都有
        TA 们的 IPv6 地址。
      </Typography.Paragraph>
      <Typography.Paragraph>
        我会活下去嘛？我该怎样活下去？
      </Typography.Paragraph>
      <Divider />
      <Typography.Paragraph>
        某种程度上，能活到现在，确是一种奇迹。但是活着是会累的，像不曾充电的电池，死于电量用尽。
      </Typography.Paragraph>
      <Typography.Paragraph>
        「人固有一死，或重于泰山，或轻于鸿毛。」泰山是沉重的，会砸死人的；鸿毛是沃尔玛塑料袋，会被遗忘的。
      </Typography.Paragraph>
      <Typography.Paragraph>
        <del>也许</del>不会有人在意我的死活 -- 既然照顾不好自己。
      </Typography.Paragraph>
      <Divider />
      <Typography.Paragraph>
        一个个不眠之夜，为并不好的身体雪上加霜。但夜晚是宁静的，是少有的不被打扰的时刻。
      </Typography.Paragraph>
      <Typography.Paragraph>
        手指轻轻地触碰着键盘，清脆的声响像黑夜里几颗闪烁的星星。
      </Typography.Paragraph>
      <Typography.Paragraph>
        明天还会到来。黑夜是短暂的，是珍贵的，也是脆弱的。当耀眼的太阳爬上天空，黑夜便消失的无影无踪。
      </Typography.Paragraph>
      <Divider />
      <Typography.Paragraph>
        一切都是暂时的。当我的一切都变得不可持续，我将不复存在。
      </Typography.Paragraph>
      <Typography.Paragraph>
        没人会知道的... 这比鸿毛还轻。
      </Typography.Paragraph>
    </Anim>
  );
}
