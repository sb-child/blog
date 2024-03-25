import code1 from '@/assets/code/mcs-1-2/1.txt';
import code10 from '@/assets/code/mcs-1-2/10.txt';
import code11 from '@/assets/code/mcs-1-2/11.txt';
import code12 from '@/assets/code/mcs-1-2/12.txt';
import code13 from '@/assets/code/mcs-1-2/13.txt';
import code14 from '@/assets/code/mcs-1-2/14.txt';
import code15 from '@/assets/code/mcs-1-2/15.txt';
import code16 from '@/assets/code/mcs-1-2/16.txt';
import code17 from '@/assets/code/mcs-1-2/17.txt';
import code2 from '@/assets/code/mcs-1-2/2.txt';
import code3 from '@/assets/code/mcs-1-2/3.txt';
import code4 from '@/assets/code/mcs-1-2/4.txt';
import code5 from '@/assets/code/mcs-1-2/5.txt';
import code6 from '@/assets/code/mcs-1-2/6.txt';
import code7 from '@/assets/code/mcs-1-2/7.txt';
import code8 from '@/assets/code/mcs-1-2/8.txt';
import code9 from '@/assets/code/mcs-1-2/9.txt';
import img1 from '@/assets/images/posts/mcs-1-2/1.png';
import CodeView from '@/components/CodeView';
import Anim from '@/components/animated';
import { Divider, Image, Typography } from 'antd';
import { Link } from 'umi';

/// title: MC开服指北: 1.自制认证服务器 Part2
/// desc: 论如何面对一团乱麻的代码
/// folder: docs/文档
/// tags: Minecraft,rust,server
/// next: /posts/Build-MCS/1-auth-backend-p3
/// sugg: Minecraft,rust,server
/// create: 2023-11-29 02:40:48
/// update: 2023-11-29 19:54:19

const TT = Typography.Title;
const TP = Typography.Paragraph;
const TL = Typography.Link;

export default function Content(props: {}) {
  return (
    <Anim k="p_buildmcs_1-auth-backend-p2">
      <TT level={2}>连接到数据库</TT>
      <TP>
        <TP>
          在<Link to="/posts/Build-MCS/1-auth-backend">上个 part</Link> 中,
          我们按照服务端规范参考文档规划了基本的数据库架构,
          接下来我们将在源代码中连接到数据库
        </TP>
        <TP>
          <TP>
            在 <code>src</code> 目录下创建 <code>lib.rs</code>, 导入之前生成的{' '}
            <code>src/prisma.rs</code>
          </TP>
          <TP>
            为了隐藏 <code>src/prisma.rs</code> 中的警告(比如未使用的导入),
            我们需要为这次导入添加 <code>allow</code> 宏
          </TP>
        </TP>
        <CodeView file={code1} language="rust" />
        <TP>
          <TP>
            然后为 <code>prisma-client-rust</code> 和{' '}
            <code>prisma-client-rust-cli</code> 第三方库启用{' '}
            <TL href="https://prisma.brendonovich.dev/extra/migrations">
              <code>migrations</code>
            </TL>
            feature
          </TP>
          <TP>
            修改 <code>Cargo.toml</code> 中的相关项
          </TP>
        </TP>
        <CodeView file={code2} language="toml" />
        <TP>
          <TP>
            在 <code>prisma</code> 目录下创建 <code>migrations</code>目录,
            然后在 <code>prisma/migrations</code> 目录中创建
            <code>.keep</code> 空文件
          </TP>
          <TP>
            因为刚刚启用了{' '}
            <TL href="https://prisma.brendonovich.dev/extra/migrations">
              <code>migrations</code>
            </TL>{' '}
            feature, 需要再次生成 binding
          </TP>
        </TP>
        <CodeView file={code3} language="plaintext" />
        <TP>
          <TP>
            准备工作已经完成了, 接下来编辑
            <code>src/main.rs</code>
            实现连接数据库的逻辑
          </TP>
          <TP>
            在<code>src/main.rs</code>的顶部, 导入这些库
          </TP>
        </TP>
        <CodeView file={code4} language="rust" />
        <TP>然后在 main 函数内, 连接数据库</TP>
        <CodeView file={code5} language="rust" />
        <TP>运行试试</TP>
        <CodeView file={code6} language="rust" />
        <Divider />
        <TT level={2}>整理一团乱麻的代码</TT>
        <TP>
          为了让代码看起来更美观一些, 我们修改一下<code>rustfmt</code>规则
        </TP>
        <TP>
          创建并编辑<code>.rustfmt.toml</code>文件
        </TP>
        <CodeView file={code7} language="toml" />
        <TP>
          <del>代码重用是模块化编程的1大法宝</del>, 为了保持每个文件的整洁,
          接下来我们把
          <code>src/main.rs</code>中的<code>GetMetadataResp</code>,
          <code>Meta</code>和<code>MetaLinks</code>移动到新文件中
        </TP>
        <TP>
          在<code>src</code>中, 新建一个目录<code>models</code>, 在
          <code>src/models</code>中新建
          <code>lib.rs</code>和<code>meta.rs</code>
        </TP>
        <TP>
          在<code>src/models/lib.rs</code>中导出<code>src/models/meta.rs</code>,
          使其可以被外部引用
        </TP>
        <CodeView file={code8} language="rust" />
        <TP>
          修改<code>src/lib.rs</code>, 使<code>src/models</code>可以被
          <code>src/main.rs</code>引用
        </TP>
        <CodeView file={code9} language="rust" />
        <TP>
          删除<code>src/main.rs</code>中的<code>GetMetadataResp</code>,
          <code>Meta</code>和<code>MetaLinks</code>结构体, 移动到
          <code>src/models/meta.rs</code>中, 包装为<code>meta_resp</code>模块,
          并设置可见性为<code>pub</code>
        </TP>
        <CodeView file={code10} language="rust" />
        <TP>
          在<code>src/main.rs</code>中, 导入刚刚创建的<code>meta_resp</code>
          模块, 并删除未使用的导入
        </TP>
        <CodeView file={code11} language="rust" />
        <TP>
          在<code>src/main.rs</code>中, 更新<code>index</code>函数引用的结构体
        </TP>
        <CodeView file={code12} language="rust" />
        <TP>
          现在<code>src/main.rs</code>就变得更干净啦
        </TP>
        <Divider />
        <TT level={2}>登录API</TT>
        <TP>
          接下来实现
          <TL href="https://github.com/yushijinhun/authlib-injector/wiki/Yggdrasil-%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%8A%80%E6%9C%AF%E8%A7%84%E8%8C%83#%E7%99%BB%E5%BD%95">
            登录
          </TL>
          API
        </TP>
        <TP>
          在<code>src/models</code>目录下创建并编辑<code>login.rs</code>文件,
          创建两个模块，分别存放登录请求和响应结构体
        </TP>
        <CodeView file={code13} language="rust" />
        <TP>
          在<code>src/models/mod.rs</code>中导出<code>login</code>模块
        </TP>
        <CodeView file={code14} language="rust" />
        <TP>
          在<code>src/main.rs</code>中导入<code>login</code>模块中的
          <code>login_req</code>和<code>login_resp</code>模块
        </TP>
        <CodeView file={code15} language="rust" />
        <TP>
          在<code>src/main.rs</code>中创建<code>login</code>函数，并添加
          <code>POST /authserver/authenticate</code>路由
        </TP>
        <CodeView file={code16} language="rust" />
        <TP>编译运行，试一下吧~</TP>
        <CodeView file={code17} language="plaintext" />
        <TP>在 HMCL 里试试</TP>
        <Image src={img1} />
      </TP>
      <Divider />
      <TT level={2}>Next Step</TT>
      <TP>
        <TP>
          在下一 part 的文章中, 我们将进一步整理代码，通过实现<code>State</code>
          结构体，在<code>Handler</code>函数中操作数据库和读取全局状态。
        </TP>
      </TP>
    </Anim>
  );
}
