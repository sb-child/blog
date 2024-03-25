import { ReactComponent as TelegramLogo } from '@/assets/icons/telegram.svg';
import Anim from '@/components/animated';
import Icon, {
  BookOutlined,
  ContainerOutlined,
  GithubOutlined,
  HomeOutlined,
  KeyOutlined,
  MailOutlined,
  TeamOutlined,
  ToolOutlined,
} from '@ant-design/icons';
import { mdiGamepadVariantOutline } from '@mdi/js';
import { Icon as MdiIcon } from '@mdi/react';
import { Button, Divider, Space, Typography } from 'antd';
import { useNavigate } from 'umi';

export default function RootContent(props: {}) {
  const nav = useNavigate();
  return (
    <Anim k="root">
      <Typography.Title>欢迎喵</Typography.Title>
      <Divider orientation="left">本站简史</Divider>
      <Typography.Title level={4} code delete>
        起初在用 hugo, 但是嫌不好用
      </Typography.Title>
      <Typography.Title level={4} code delete>
        笨蛋 VuePress 更新个版本就炸了，所以咱这次用 React 写了个
      </Typography.Title>
      <Typography.Title level={4} code delete>
        umi 升级出问题了，于是换了 Vite
      </Typography.Title>
      <Typography.Title level={4} code>
        之前 Vite 写的维护不动了，所以咱这次用 umi 重构啦
      </Typography.Title>
      <Divider orientation="left">本站成分</Divider>
      <Space wrap>
        <Button
          size="large"
          type="primary"
          icon={<BookOutlined />}
          onClick={() => nav('/articles')}
        >
          文章列表
        </Button>
        <Button
          size="large"
          icon={<TeamOutlined />}
          onClick={() => nav('/friends')}
        >
          友情链接
        </Button>
        <Button
          size="large"
          icon={
            <MdiIcon
              path={mdiGamepadVariantOutline}
              size={'1em'}
              className="_icon"
            />
          }
          onClick={() => nav('/game')}
        >
          打把游戏
        </Button>
        <Button
          size="large"
          icon={<ToolOutlined />}
          onClick={() => nav('/tools')}
        >
          神奇工具
        </Button>
        <Button
          icon={<ContainerOutlined />}
          className="__no_override__"
          size="large"
          href="https://github.com/sb-child/blog"
          target="_blank"
        >
          查看本站源代码
        </Button>
        <Button
          className="__no_override__"
          size="large"
          icon={<HomeOutlined />}
          href="https://sbchild.top/"
          target="_self"
        >
          回到首页
        </Button>
      </Space>
      <Divider orientation="left">联系方式</Divider>
      <Space wrap>
        <Button
          className="__no_override__"
          size="large"
          type="primary"
          icon={<GithubOutlined />}
          href="https://github.com/sb-child"
          target="_blank"
        >
          GitHub
        </Button>
        <Button
          className="__no_override__"
          size="large"
          icon={<Icon component={TelegramLogo} />}
          href="https://t.me/sbchild"
          target="_blank"
        >
          Telegram
        </Button>
        <Button
          className="__no_override__"
          size="large"
          icon={<MailOutlined />}
          href="mailto:sbchild0@gmail.com"
          target="_blank"
        >
          Email
        </Button>
      </Space>
      <Divider orientation="left">夹蜜通话!</Divider>
      <Space wrap>
        <Button
          type="primary"
          size="large"
          icon={<KeyOutlined />}
          onClick={() => nav('/posts/my/gpg')}
        >
          GPG 公钥
        </Button>
      </Space>
    </Anim>
  );
}
