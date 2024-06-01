import img1 from '@/assets/images/posts/fake-smart-watch/2024-06-01-17-22-47-269.jpg';
import img2 from '@/assets/images/posts/fake-smart-watch/2024-06-01-17-27-10-320.jpg';
import img3 from '@/assets/images/posts/fake-smart-watch/2024-06-01-17-27-33-026.jpg';
import img4 from '@/assets/images/posts/fake-smart-watch/2024-06-01-17-30-36-346.jpg';
import img6 from '@/assets/images/posts/fake-smart-watch/2024-06-01-17-45-33-257.jpg';
import img8 from '@/assets/images/posts/fake-smart-watch/2024-06-01-17-48-44-425.jpg';
import img9 from '@/assets/images/posts/fake-smart-watch/2024-06-01-17-49-08-346.jpg';
import img11 from '@/assets/images/posts/fake-smart-watch/2024-06-01-17-51-55-171.jpg';
import img12 from '@/assets/images/posts/fake-smart-watch/2024-06-01-17-56-56-661.jpg';
import img13 from '@/assets/images/posts/fake-smart-watch/2024-06-01-18-03-06-290.jpg';
import img14 from '@/assets/images/posts/fake-smart-watch/2024-06-01-18-04-52-548.jpg';
import img15 from '@/assets/images/posts/fake-smart-watch/2024-06-01-18-05-38-019.jpg';
import img16 from '@/assets/images/posts/fake-smart-watch/2024-06-01-18-07-43-977.jpg';
import img5 from '@/assets/images/posts/fake-smart-watch/p1.png';
import img7 from '@/assets/images/posts/fake-smart-watch/p2.png';
import img10 from '@/assets/images/posts/fake-smart-watch/p3.png';

import CodeView from '@/components/CodeView';
import Anim from '@/components/animated';
import { Image, Typography } from 'antd';
import { Link } from 'umi';

/// title: 六一特辑: 华强北奇怪手表 - 开箱
/// desc: 就是这次开箱有点特别... 不如叫做开盒
/// folder: goods/小玩意
/// tags: smartwatch,unboxing
/// next: /
/// sugg: smartwatch
/// create: 2024-06-01 19:58:46
/// update: 2024-06-01 19:58:46

const TT = Typography.Title;
const TP = Typography.Paragraph;
const TE = Typography.Text;
const TL = Typography.Link;
const IM = Image;
const LK = Link;
const CV = CodeView;

export default function Content(props: {}) {
  return (
    <Anim k="p_fake-smart-watch-1-unboxing">
      <TP>
        为了庆祝六一儿童节, 色妹妹给我买了点礼物喵~
        <sub>色妹妹不就是我自己嘛</sub>
      </TP>
      <TP>直接看图喵~</TP>
      <IM src={img1} />
      <TP>
        哇这块表比咱 OPPO Watch 2 GT 还大~ 那真是谢谢色妹妹<sub>咱自己</sub>啦~
      </TP>
      <TP>先看看它的样子吧:</TP>
      <IM src={img2} />
      <TP>
        脱掉了它的衣服, 然后看看它的肚皮~ 但是里面那个黄色的东西是什么呀...
        难道是传说中的{' '}
        <LK to="https://zh.wikipedia.org/wiki/%E6%9F%94%E6%80%A7%E5%8D%B0%E5%88%B7%E7%94%B5%E8%B7%AF%E6%9D%BF">
          FPC
        </LK>
        ?
      </TP>
      <IM src={img3} />
      <TP>它侧面的旋钮看起来也并不结实, 转动的时候会晃, 好奇怪呢...</TP>
      <TP>为了揭秘这些问题, 咱只好把它拆开康康啦~</TP>
      <TT level={2}>开盒~</TT>
      <TP>4 个六角螺丝拧下</TP>
      <IM src={img4} />
      <TP>然后轻轻打开盖子...</TP>
      <IM src={img5} />
      <TP>坏耶, 里面好乱, 而且只能开这么大了...试试用镊子拔下旋钮?</TP>
      <IM src={img6} />
      <TP>然后把这个金属棒推进去</TP>
      <IM src={img7} />
      <TP>就可以看到更多东西啦:</TP>
      <IM src={img8} />
      <TP>用镊子把碍事的麦克风拔出来</TP>
      <IM src={img9} />
      <TP>然后...还需要用镊子把屏幕的排线座撬开</TP>
      <IM src={img10} />
      <TP>
        就可以一览无余啦, 这块电池的容量是 190 mAh, 不知道能续航多长时间呢
      </TP>
      <IM src={img11} />
      <TT level={2}>康康好康的~</TT>
      <TP>
        但怎么又是这个没 datashit 的 mcu 喵...但凡看到 JL 的标志,
        一般就是废品惹, 至少对咱来说是...
      </TP>
      <IM src={img12} />
      <TP>拧下螺丝, 拔下软排线, 看看电路板背面吧~</TP>
      <IM src={img13} />
      <TP>
        电路板后面, 是无线充电线圈, 震动马达和...不知道背面有什么东西的 FPC 板
      </TP>
      <IM src={img14} />
      <TP>电路板背面特写:</TP>
      <TP>
        看样子有两组 <LK to="https://zh.wikipedia.org/wiki/I%C2%B2C">I2C</LK>{' '}
        总线?
      </TP>
      <IM src={img15} />
      <TT level={2}>无奖竞猜</TT>
      <TP>
        这 4 个{' '}
        <LK to="https://zh.wikipedia.org/wiki/%E7%99%BC%E5%85%89%E4%BA%8C%E6%A5%B5%E7%AE%A1">
          LED
        </LK>{' '}
        是怎么测心率的...
      </TP>
      <IM src={img16} />
      <TP>估计是骗人的把戏喵~ 有知道原理的可以私聊或者在裙里浇浇咱~</TP>
    </Anim>
  );
}
