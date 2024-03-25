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
import img1 from '@/assets/images/posts/mcs-1-1/1.png';
import CodeView from '@/components/CodeView';
import Anim from '@/components/animated';
import { Divider, Image, Typography } from 'antd';

/// title: MC开服指北: 1.自制认证服务器 Part1
/// desc: 没用的生锈轮子增加啦
/// folder: docs/文档
/// tags: Minecraft,rust,server
/// next: /posts/Build-MCS/1-auth-backend-p2
/// sugg: Minecraft,rust,server
/// create: 2023-11-28 17:05:13
/// update: 2023-11-29 02:40:48

export default function Content(props: {}) {
  return (
    <Anim k="p_buildmcs_1-auth-backend">
      <Typography.Title level={2}>参考文档</Typography.Title>
      <Typography.Title level={3}>服务端 API 规范</Typography.Title>
      <Typography.Paragraph>
        <Typography.Link href="https://mojang-api-docs.gapple.pw/">
          mojang-api-docs
        </Typography.Link>
        和
        <Typography.Link href="https://github.com/yushijinhun/authlib-injector/wiki/Yggdrasil-%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%8A%80%E6%9C%AF%E8%A7%84%E8%8C%83">
          Yggdrasil
        </Typography.Link>
      </Typography.Paragraph>
      <Divider />
      <Typography.Title level={2}>新建项目</Typography.Title>
      <Typography.Paragraph>
        <Typography.Paragraph>创建一个 rust app package</Typography.Paragraph>
        <CodeView file={contentCmd1} language="plaintext" />
        <Typography.Paragraph>
          在 <code>Cargo.toml</code> 里添加一些会用到的第三方库
        </Typography.Paragraph>
        <CodeView file={contentCmd2} language="toml" />
        <Typography.Paragraph>
          修改 <code>src/main.rs</code>, 为 main 函数包装 tokio 异步 runtime
        </Typography.Paragraph>
        <CodeView file={contentCmd3} language="rust" />
        <Typography.Paragraph>编译运行试试</Typography.Paragraph>
        <CodeView file={contentCmd4} language="rust" />
      </Typography.Paragraph>
      <Divider />
      <Typography.Title level={2}>简单的 HTTP 服务器</Typography.Title>
      <Typography.Paragraph>
        <Typography.Paragraph>
          初始化 tokio tracing 组件, 用于输出日志; 创建 <code>/</code> 路由,
          返回一个 json 格式的结构体; 监听 <code>127.0.0.1:2345</code> 端口,
          提供 http 服务。
        </Typography.Paragraph>
        <CodeView file={contentCmd5} language="rust" />
        <Typography.Paragraph>试一下</Typography.Paragraph>
        <CodeView file={contentCmd6} language="plaintext" />
        <CodeView file={contentCmd7} language="plaintext" />
        现在就有一个能用的 HTTP 服务器啦
      </Typography.Paragraph>
      <Typography.Title level={2}>数据库</Typography.Title>
      <Typography.Paragraph>
        <Typography.Paragraph>
          实现 API 之前, 先创建数据库吧。
        </Typography.Paragraph>
        <Typography.Paragraph>
          在 <code>src/cli</code> 目录下创建 <code>prisma.rs</code>{' '}
          并写入以下内容
        </Typography.Paragraph>
        <CodeView file={contentCmd8} language="rust" />
        <Typography.Paragraph>
          创建 <code>.cargo</code>目录, 在<code>.cargo</code>目录下创建{' '}
          <code>config.toml</code> 并写入以下内容
        </Typography.Paragraph>
        <CodeView file={contentCmd9} language="toml" />
        <Typography.Paragraph>初始化 prisma</Typography.Paragraph>
        <CodeView file={contentCmd10} language="plaintext" />
        <Typography.Paragraph>
          把一些无关紧要的文件放进 <code>.gitignore</code> 文件中
        </Typography.Paragraph>
        <CodeView file={contentCmd11} language="plaintext" />
        <Typography.Paragraph>
          在 postgresql 中创建用户和数据库
        </Typography.Paragraph>
        <CodeView file={contentCmd12} language="plaintext" />
        <Typography.Paragraph>
          编辑 <code>prisma</code> 目录下的 <code>schema.prisma</code> 文件,
          它用来定义数据库的框架
        </Typography.Paragraph>
        <CodeView file={contentCmd13} language="go" />
        <Typography.Paragraph>生成数据表和 binding 文件</Typography.Paragraph>
        <CodeView file={contentCmd14} language="plaintext" />
      </Typography.Paragraph>
      <Divider />
      <Typography.Title level={2}>第一个 API</Typography.Title>
      <Typography.Paragraph>
        <Typography.Paragraph>
          接下来实现
          <Typography.Link href="https://github.com/yushijinhun/authlib-injector/wiki/Yggdrasil-%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%8A%80%E6%9C%AF%E8%A7%84%E8%8C%83#api-%E5%85%83%E6%95%B0%E6%8D%AE%E8%8E%B7%E5%8F%96">
            元数据获取
          </Typography.Link>
          API
        </Typography.Paragraph>
        <Typography.Paragraph>
          改一下 <code>src/main.rs</code>, 实现它
        </Typography.Paragraph>
        <CodeView file={contentCmd15} language="rust" />
        <Typography.Paragraph>
          现在它应该能用啦, 用 curl 测试一下
        </Typography.Paragraph>
        <CodeView file={contentCmd16} language="plaintext" />
        <CodeView file={contentCmd17} language="plaintext" />
        <Typography.Paragraph>在 HMCL 里试试</Typography.Paragraph>
        <Image src={img1} />
      </Typography.Paragraph>
      <Typography.Title level={2}>Next Step</Typography.Title>
      <Typography.Paragraph>
        <Typography.Paragraph>
          在下一 part 的文章中, 我们将导入数据库, 并实现更多功能。
        </Typography.Paragraph>
      </Typography.Paragraph>
    </Anim>
  );
}
