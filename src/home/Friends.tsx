import friendLink from '@/assets/code/friendLink.txt';
import imgCircleCrop from '@/assets/images/friends/CircleCrop.webp';
import imgChengxuji from '@/assets/images/friends/chengxuji.jpg';
import imgClark from '@/assets/images/friends/clark.png';
import imgControlNet from '@/assets/images/friends/controlnet.jpg';
import imgEmoji from '@/assets/images/friends/emoji.png';
import imgHiyase from '@/assets/images/friends/hiyase.jpeg';
import imgKeke from '@/assets/images/friends/keke.jpg';
import imgLfhsheng from '@/assets/images/friends/lfhs.jpg';
import imgMilena from '@/assets/images/friends/milena.png';
import imgPll from '@/assets/images/friends/pll.jpg';
import imgPoly from '@/assets/images/friends/poly000.png';
import imgSharelter from '@/assets/images/friends/sharelter.jpeg';
import imgStarmoe from '@/assets/images/friends/starmoe.webp';
import imgUdon from '@/assets/images/friends/udon.png';
import imgValki from '@/assets/images/friends/valki.png';
import CodeView from '@/components/CodeView';
import Anim from '@/components/animated';
import { copyToClipboard } from '@/utils/clipboard';
import {
  AlertOutlined,
  CopyOutlined,
  GlobalOutlined,
  QuestionCircleOutlined,
  SafetyCertificateOutlined,
} from '@ant-design/icons';
import {
  Avatar,
  Button,
  Card,
  Col,
  Divider,
  Popover,
  Row,
  Tag,
  Typography,
} from 'antd';
import React from 'react';

function FriendCard(props: {
  title: string;
  desc: string;
  avatar: string;
  link: string;
  extra?: React.ReactNode;
}) {
  const [copied, setCopied] = React.useState(0);
  React.useEffect(() => {
    let t: NodeJS.Timeout | undefined;
    if (copied !== 0) {
      t = setTimeout(() => {
        setCopied(0);
      }, 1000);
    }
    return () => {
      if (t) {
        clearTimeout(t);
      }
    };
  }, [copied]);
  return (
    <Col xs={24} sm={24} md={12}>
      <Card
        hoverable
        // className={MainCss.BgColorBgLayout}
        actions={[
          <Button
            key={'friend-link-' + props.title + '-' + props.link}
            type="primary"
            icon={<GlobalOutlined />}
            onClick={() => {
              window.open(props.link, '_blank');
            }}
          >
            打开
          </Button>,
          <Button
            key={'friend-link-copy-' + props.title + '-' + props.link}
            icon={<CopyOutlined />}
            onClick={() => {
              copyToClipboard(
                props.link,
                () => setCopied(1), // success
                () => setCopied(2), // error
              );
            }}
          >
            {copied === 0 ? '复制链接' : copied === 1 ? '已复制' : '复制失败'}
          </Button>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar src={props.avatar} size={50} />}
          title={props.title}
          description={
            <div>
              <div>{props.desc}</div>
              {props.extra ? <div>{props.extra}</div> : <div />}
            </div>
          }
        />
      </Card>
    </Col>
  );
}

export default function FriendsContent(props: {}) {
  return (
    <Anim k="root-friends" className="__content__">
      <Typography.Title level={1}>好朋友们</Typography.Title>
      <Typography.Paragraph>
        以下友链, 站长会不定期检查并注明问题的~
      </Typography.Paragraph>
      <Typography.Paragraph>
        站长爱你们哦~<sub>(小声)</sub>
      </Typography.Paragraph>
      <Typography.Title level={2}>咱的友链哦</Typography.Title>
      <Row gutter={[8, 8]}>
        <FriendCard
          title="灯花小屋~"
          avatar={imgMilena}
          desc="我们是宇宙的尘埃，佩戴着璀璨的星辰。"
          link="https://milena-blog.vercel.app/"
        />
        <FriendCard
          title="ControlNet"
          avatar={imgControlNet}
          desc="控制·网络·空间，好棒的名字哦"
          link="https://controlnet.space/"
        />
        <FriendCard
          title="表情君的後花園"
          avatar={imgEmoji}
          desc="表情君的垃圾桶，偶爾輸出有用的垃圾文"
          link="https://www.1f616emo.xyz/"
          extra={
            <Popover
              title="2024.3.23"
              content="贵站似乎未添加本站的友情链接，记得检查。"
            >
              <Tag color="warning" icon={<QuestionCircleOutlined />}>
                消失的友链
              </Tag>
            </Popover>
          }
        />
        <FriendCard
          title="泠风寒声的Blog"
          avatar={imgLfhsheng}
          desc="沉浸在Touch Fish的海洋中无法自拔"
          link="https://blog.lfhsheng.com/"
          extra={
            <div>
              <Popover
                title="2024.3.23"
                content="贵站似乎未添加本站的友情链接，记得检查。"
              >
                <Tag color="warning" icon={<QuestionCircleOutlined />}>
                  消失的友链
                </Tag>
              </Popover>
              <Popover
                title="2024.5.18"
                content="贵站的 TLS 证书已过期, 请及时续订。"
              >
                <Tag color="warning" icon={<SafetyCertificateOutlined />}>
                  TLS 证书已过期
                </Tag>
              </Popover>
            </div>
          }
        />
        <FriendCard
          title="starmoe's site"
          avatar={imgStarmoe}
          desc="「生亦何苦，死亦何哀」"
          link="https://hexo.hydi.xyz/"
          extra={
            <div>
              <Popover
                title="2023.11.26"
                content="经 @ElihusoQ 现场确认, 残念已吞药去世"
              >
                <Tag color="error" icon={<AlertOutlined />}>
                  博主因自杀逝世
                </Tag>
              </Popover>
              <Popover
                title="2024.2.6"
                content="域名 hydi.xyz 已过期, 贵站源代码仓库位于 https://github.com/Bro-Xun/hexo, 备份于 https://github.com/sb-child/broxun-hexo-backup"
              >
                <Tag color="warning" icon={<GlobalOutlined />}>
                  域名已过期
                </Tag>
              </Popover>
            </div>
          }
        />
        <FriendCard
          title="Sharelter"
          avatar={imgSharelter}
          desc="喜欢喵喵的可爱大姐姐的blog哦"
          link="https://sharelter.github.io/"
        />
        <FriendCard
          title="冷曦的喵喵小屋"
          avatar={imgHiyase}
          desc="愿每个人都被温柔以待"
          link="https://Hiyase.github.io/"
        />
        <FriendCard
          title="valki"
          avatar={imgValki}
          desc="一只小废物"
          link="https://valkierja.github.io/"
        />
        <FriendCard
          title="Udon's Planet"
          avatar={imgUdon}
          desc="乌冬的Blog~"
          link="https://udon.rocks/"
        />
        <FriendCard
          title="CircleCrop Blog"
          avatar={imgCircleCrop}
          desc="A boy from China who likes photography, music and ACGN."
          link="https://aiccrop.com/"
        />
        <FriendCard
          title="poly000客栈"
          avatar={imgPoly}
          desc="poly的blog喵"
          link="https://mokurin000.github.io/"
        />
        <FriendCard
          title="ChengxujiのBlog"
          avatar={imgChengxuji}
          desc="珵绪(姬)诗人的船新Blog"
          link="http://blog.chengxuji.top/"
          extra={
            <Popover
              title="2024.3.15"
              content="贵站因 TLS 证书并不信任 blog.chengxuji.top, 故回退到 http 协议。"
            >
              <Tag color="warning" icon={<SafetyCertificateOutlined />}>
                TLS 证书配置错误
              </Tag>
            </Popover>
          }
        />
        <FriendCard
          title="ClarkQAQ"
          avatar={imgClark}
          desc="普通的程序员, Linux 桌面窗管用户"
          link="https://clarkqwq.top/"
        />
        <FriendCard
          title="kk"
          avatar={imgKeke}
          desc="黑暗之子，寻址之神"
          link="https://kekeimiku.github.io/"
        />
        <FriendCard
          title="PangLAN"
          avatar={imgPll}
          desc="PangLAN 的博客"
          link="https://pll.moe/"
          extra={
            <div>
              <Popover
                title="2024.5.18"
                content="贵站似乎未添加本站的友情链接，记得检查。"
              >
                <Tag color="warning" icon={<QuestionCircleOutlined />}>
                  消失的友链
                </Tag>
              </Popover>
            </div>
          }
        />
      </Row>
      <Divider />
      <Typography.Paragraph>
        想成为咱的好朋友嘛?
        <CodeView file={friendLink} language={'yaml'} />
        <blockquote>记得找个联系方式, 私聊咱~</blockquote>
      </Typography.Paragraph>
    </Anim>
  );
}
