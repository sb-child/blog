import code1 from '@/assets/code/mcs-1-3/1.txt';
import code10 from '@/assets/code/mcs-1-3/10.txt';
import code11 from '@/assets/code/mcs-1-3/11.txt';
import code12 from '@/assets/code/mcs-1-3/12.txt';
import code13 from '@/assets/code/mcs-1-3/13.txt';
import code14 from '@/assets/code/mcs-1-3/14.txt';
import code15 from '@/assets/code/mcs-1-3/15.txt';
import code16 from '@/assets/code/mcs-1-3/16.txt';
import code17 from '@/assets/code/mcs-1-3/17.txt';
import code18 from '@/assets/code/mcs-1-3/18.txt';
import code19 from '@/assets/code/mcs-1-3/19.txt';
import code2 from '@/assets/code/mcs-1-3/2.txt';
import code3 from '@/assets/code/mcs-1-3/3.txt';
import code4 from '@/assets/code/mcs-1-3/4.txt';
import code5 from '@/assets/code/mcs-1-3/5.txt';
import code6 from '@/assets/code/mcs-1-3/6.txt';
import code7 from '@/assets/code/mcs-1-3/7.txt';
import code8 from '@/assets/code/mcs-1-3/8.txt';
import code9 from '@/assets/code/mcs-1-3/9.txt';
import img1 from '@/assets/images/posts/mcs-1-3/1.png';
import img2 from '@/assets/images/posts/mcs-1-3/2.png';
import CodeView from '@/components/CodeView';
import Anim from '@/components/animated';
import { Divider, Image, Typography } from 'antd';
import { Link } from 'umi';

/// title: MC开服指北: 1.自制认证服务器 Part3
/// desc: 讨好编译器是程序媛的传统美德
/// folder: docs/文档
/// tags: Minecraft,rust,server
/// next: /posts/Build-MCS/1-auth-backend-p4
/// sugg: Minecraft,rust,server
/// create: 2023-11-29 19:54:19
/// update: 2023-11-30 02:43:49

const TT = Typography.Title;
const TP = Typography.Paragraph;
const TL = Typography.Link;
const IM = Image;
const LK = Link;
const CV = CodeView;

export default function Content(props: {}) {
  return (
    <Anim k="p_buildmcs_1-auth-backend-p3">
      <TT level={2}>状态管理</TT>
      <TP>
        在<LK to="/posts/Build-MCS/1-auth-backend-p2">上个 part</LK> 中,
        我们实现了连接数据库的逻辑和登录API的框架, 接下来我们通过引入
        <code>State</code>来实现在<code>Handler</code>中操作数据库
      </TP>
      <TP>
        在<code>src</code>目录下创建并编辑<code>app_state.rs</code>文件
      </TP>
      <CV file={code1} language="rust" />
      <TP>
        <code>src/app_state.rs</code>中定义了<code>AppState</code>结构体, 它将在
        <code>main</code>函数中实例化, 并在HTTP服务器收到请求后传递到
        <code>Handler</code>中(如果
        <code>Handler</code>需要的话)
      </TP>
      <TP>
        更新<code>src/lib.rs</code>, 使<code>src/app_state.rs</code>可以被
        <code>src/main.rs</code>引用
      </TP>
      <CV file={code2} language="rust" />
      <TP>
        在<code>src/main.rs</code>中导入这些库
      </TP>
      <CV file={code3} language="rust" />
      <TP>
        在<code>src/main.rs</code>的<code>main</code>函数中实例化
        <code>AppState</code>结构体, 并传递到<code>Router</code>中
      </TP>
      <CV file={code4} language="rust" />
      <TP>
        更新<code>src/main.rs</code>的<code>index</code>和<code>login</code>
        函数, 添加<code>state</code>参数
      </TP>
      <CV file={code5} language="rust" />
      <TP>
        试着在<code>src/main.rs</code>的<code>login</code>
        函数中引用<code>state.db</code>字段
      </TP>
      <CV file={code6} language="rust" />
      <TP>编译运行，试一下吧~</TP>
      <CV file={code7} language="plaintext" />
      <TP>在 HMCL 里试试</TP>
      <IM src={img1} />
      <Divider />
      <TT level={2}>"业务代码"</TT>
      <TP>通过前期两个半part的准备, 现在写业务代码就变得非常轻松</TP>
      <TP>
        在<code>src/main.rs</code>的<code>main</code>函数中, 给数据库的
        <code>user</code>表里增添一个用户
      </TP>
      <CV file={code8} language="rust" />
      <TP>编译运行, 然后关掉它</TP>
      <CV file={code9} language="plaintext" />
      <TP>看看数据库里是不是多了一行记录</TP>
      <CV file={code10} language="plaintext" />
      <TP>
        好耶, 注释掉刚刚插入的代码, 接下来我们为这个用户添加一个
        <code>profile</code>(角色)
      </TP>
      <TP>
        在<code>src/main.rs</code>的<code>main</code>函数中, 给邮箱是
        <code>sbchild0@gmail.com</code>的用户添加一个名字叫
        <code>sb-child</code>的角色
      </TP>
      <CV file={code11} language="rust" />
      <TP>编译运行, 然后关掉它</TP>
      <CV file={code12} language="plaintext" />
      <TP>看看数据库里是不是多了一行记录</TP>
      <CV file={code13} language="plaintext" />
      <TP>太棒啦, 注释掉刚刚插入的代码, 我们来完成登录API的具体实现吧~</TP>
      <Divider />
      <TT level={2}>真 • 业务代码</TT>
      <TP>
        在<code>Cargo.toml</code>中添加一个第三方库<code>thiserror</code>
      </TP>
      <CV file={code14} language="toml" />
      <TP>
        因为在<code>prisma-client-rust</code>的
        <TL href="https://prisma.brendonovich.dev/extra/transactions">这个</TL>
        文档中提到, transaction可以运行在一个<del>密不透风的</del>闭包里,
        所以要想让外部知道闭包里面产生了什么业务上的错误,
        就需要自定义一个枚举类型来扩充默认的
        <code>prisma_client_rust::QueryError</code>
      </TP>
      <TP>
        在<code>src/models/login.rs</code>中添加一个枚举类型
        <code>LoginTransactionError</code>
      </TP>
      <CV file={code15} language="rust" />
      <TP>
        在<code>src/main.rs</code>中导入
        <code>LoginTransactionError</code>
      </TP>
      <CV file={code16} language="rust" />
      <TP>
        在<code>src/main.rs</code>的<code>login</code>函数中添加一些代码
      </TP>
      <CV file={code17} language="rust" />
      <TP>然后填上刚才挖的坑</TP>
      <CV file={code18} language="rust" />
      <TP>编译运行，试一下吧~</TP>
      <CV file={code19} language="plaintext" />
      <TP>在 HMCL 里试试</TP>
      <IM src={img2} />
      <Divider />
      <TT level={2}>Next Step</TT>
      <TP>
        <TP>
          在下一 part 的文章中, 我们将参照API规范文档,
          完善剩下的结构体，并完成登录逻辑
        </TP>
      </TP>
    </Anim>
  );
}
