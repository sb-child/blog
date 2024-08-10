import contentCmd1 from '@/assets/code/mcs-1-1/1.txt';
import contentCmd10 from '@/assets/code/mcs-1-1/10.txt';
import contentCmd11 from '@/assets/code/mcs-1-1/11.txt';
import contentCmd12 from '@/assets/code/mcs-1-1/12.txt';
import contentCmd13 from '@/assets/code/mcs-1-1/13.txt';
import contentCmd14 from '@/assets/code/mcs-1-1/14.txt';
import contentCmd15 from '@/assets/code/mcs-1-1/15.txt';
import contentCmd16 from '@/assets/code/mcs-1-1/16.txt';
import contentCmd17 from '@/assets/code/mcs-1-1/17.txt';
import contentCmd2 from '@/assets/code/mcs-1-1/2.txt';
import contentCmd3 from '@/assets/code/mcs-1-1/3.txt';
import contentCmd4 from '@/assets/code/mcs-1-1/4.txt';
import contentCmd5 from '@/assets/code/mcs-1-1/5.txt';
import contentCmd6 from '@/assets/code/mcs-1-1/6.txt';
import contentCmd7 from '@/assets/code/mcs-1-1/7.txt';
import contentCmd8 from '@/assets/code/mcs-1-1/8.txt';
import contentCmd9 from '@/assets/code/mcs-1-1/9.txt';
import img1 from '@/assets/images/posts/coprocessor_1/1.png';
import img2 from '@/assets/images/posts/coprocessor_1/2.png';
import img3 from '@/assets/images/posts/coprocessor_1/3.png';
import img4 from '@/assets/images/posts/coprocessor_1/4.png';
import img5 from '@/assets/images/posts/coprocessor_1/5.png';
import img6 from '@/assets/images/posts/coprocessor_1/6.png';
import img7 from '@/assets/images/posts/coprocessor_1/7.png';
import img8 from '@/assets/images/posts/coprocessor_1/8.png';
import img9 from '@/assets/images/posts/coprocessor_1/9.png';
import img10 from '@/assets/images/posts/coprocessor_1/10.png';
import img11 from '@/assets/images/posts/coprocessor_1/11.png';
import img12 from '@/assets/images/posts/coprocessor_1/12.png';
import img13 from '@/assets/images/posts/coprocessor_1/13.png';
import img14 from '@/assets/images/posts/coprocessor_1/14.png';
import img15 from '@/assets/images/posts/coprocessor_1/15.png';
import img16 from '@/assets/images/posts/coprocessor_1/16.png';
import img17 from '@/assets/images/posts/coprocessor_1/17.png';
import img18 from '@/assets/images/posts/coprocessor_1/18.png';
import img19 from '@/assets/images/posts/coprocessor_1/19.png';
import img20 from '@/assets/images/posts/coprocessor_1/20.png';
import img21 from '@/assets/images/posts/coprocessor_1/21.png';
import img22 from '@/assets/images/posts/coprocessor_1/22.png';
import img23 from '@/assets/images/posts/coprocessor_1/23.png';
import CodeView from '@/components/CodeView';
import Anim from '@/components/animated';
import { Divider, Image, Typography } from 'antd';

/// title: 七夕特辑: 送给电脑的礼物
/// desc: 迫真•协处理器，好端端的电脑变得有些奇怪了
/// folder: hardware/硬件
/// tags: I2C,hardware,HDMI,embedded
/// sugg: I2C,hardware,HDMI,embedded
/// next: /
/// create: 2024-08-10 23:17:49
/// update: 2024-08-11 01:09:54

export default function Content(props: {}) {
  return (
    <Anim k="p_coprocessor_1-get-started">
      <Typography.Title level={2}>前情提要</Typography.Title>
      <Image src={img1} />
      <Typography.Paragraph>
        所以咱凭着好奇心，把咱新笔记本拆了...
      </Typography.Paragraph>
      <Typography.Title level={2}>掀电脑裙子</Typography.Title>
      <Typography.Paragraph>
        一路拆到这里，准备好东西就可以飞线啦
      </Typography.Paragraph>
      <Image src={img2} />
      <Typography.Paragraph>
        看看 pinout 大概是酱紫
      </Typography.Paragraph>
      <Image src={img3} />
      <Typography.Paragraph>
        那对应这里的过孔，应该就是酱紫吧~ 5v - GND 是 HDMI 提供的最大 300 mA 供电
      </Typography.Paragraph>
      <Image src={img4} />
      <Typography.Paragraph>
        打开焊台，温度 300 度，挤一些助焊剂
      </Typography.Paragraph>
      <Image src={img5} />
      <Typography.Paragraph>
        引出 4 根线
      </Typography.Paragraph>
      <Image src={img6} />
      <Typography.Title level={2}>对着电脑打胶</Typography.Title>
      <Typography.Paragraph>
        大部分情况下，打胶可以使电脑更强壮，优质乳白色胶具有优良的胡说八道性能，所以七夕节先对着电脑打胶
      </Typography.Paragraph>
      <Typography.Paragraph>
        当然，为了更好的证明这个胶的优良性能，所以咱拿出事实说话
      </Typography.Paragraph>
      <Image src={img7} />
      <Typography.Paragraph>
        在兆欧表的萝莉魅魔邪教下，乳白色液体竟然还没有屈服，两个铝箔之间尚有 359 兆欧的电阻
      </Typography.Paragraph>
      <Image src={img8} />
      <Typography.Paragraph>
        但是仅仅 500V 它就击穿啦! 一阵电弧的声音从里面传出来
      </Typography.Paragraph>
      <Image src={img9} />
      <Typography.Paragraph>
        但是这绝对是巧合，肯定是铝箔在慢慢地接触在一起... 所以拉开一段距离再试试
      </Typography.Paragraph>
      <Image src={img10} />
      <Typography.Paragraph>
        500V 轻松 PASS, 那 1000V 又会怎么样呢
      </Typography.Paragraph>
      <Image src={img11} />
      <Typography.Paragraph>
        但是阻值为什么在缓慢下降... 不过木头也没有那么绝缘嘛
      </Typography.Paragraph>
      <Image src={img12} />
      <Typography.Paragraph>
        如果两根木条不压在一起，数值就更准确了嘛
      </Typography.Paragraph>
      <Image src={img13} />
      <Typography.Paragraph>
        那就可以放心地给电脑灌满乳白色液体啦
      </Typography.Paragraph>
      <Image src={img14} />
      <Typography.Title level={2}>不合常理的供电</Typography.Title>
      <Typography.Paragraph>
        擦电，揩机，屏幕轻松点亮
      </Typography.Paragraph>
      <Typography.Paragraph>
        欸不对... 5V - GND 的电压怎么只有 0.003V ，即使插上显示器也是如此（但是会有些跳变）
      </Typography.Paragraph>
      <Typography.Paragraph>
        不过 SCL / SDA 到外壳是 5V ，这应该可以说明 GND 的背后有什么东西在控制。那只能再找一对供电了。
      </Typography.Paragraph>
      <Typography.Paragraph>
        又拆开了，不过为了寻找可以用的供电，电池是要插着的，再把开机键所在的排线也插上
      </Typography.Paragraph>
      <Typography.Paragraph>
        擦电，揩机，屏幕没插所以屏幕不会亮。不过重点不在屏幕，而是寻找 USB 之外的供电途径。
        为什么 USB 不可以呢？因为呀， USB 的供电也是被控制的，只要内核看不顺眼就把供电给你扬啦
      </Typography.Paragraph>
      <Image src={img15} />
      <Typography.Paragraph>
        从这里引出了地线，然后在旁边又找到了这些东西
      </Typography.Paragraph>
      <Image src={img16} />
      <Typography.Paragraph>
        拼凑在一起引出来
      </Typography.Paragraph>
      <Image src={img17} />
      <Typography.Title level={2}>迫真•协处理器</Typography.Title>
      <Typography.Paragraph>
        有多么迫真，才算迫真呢？咱不知道，但是先把供电接到一块洞洞板上
      </Typography.Paragraph>
      <Image src={img18} />
      <Typography.Paragraph>
        切下来，然后把线全焊上去
      </Typography.Paragraph>
      <Image src={img19} />
      <Typography.Paragraph>
        把线都塞一边
      </Typography.Paragraph>
      <Image src={img20} />
      <Typography.Paragraph>
        找到了之前画的 CH32V003 小板子，塞进去正合适，飞出几根线试试吧
      </Typography.Paragraph>
      <Image src={img21} />
      <Typography.Paragraph>
        就先酱吧，不用盖盖子
      </Typography.Paragraph>
      <Image src={img22} />
      <Typography.Paragraph>
        擦电，揩机，屏幕轻松点亮
      </Typography.Paragraph>
      <Image src={img23} />
      <Typography.Paragraph>
        单片机的 I2C 功能是默认关着的，所以这里是识别不到的。至于怎么写程序并且用电脑控制它... 未完待续吧
      </Typography.Paragraph>
    </Anim>
  );
}
