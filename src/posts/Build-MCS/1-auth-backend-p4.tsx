import code1 from '@/assets/code/mcs-1-4/1.txt';
import code10 from '@/assets/code/mcs-1-4/10.txt';
import code11 from '@/assets/code/mcs-1-4/11.txt';
import code12 from '@/assets/code/mcs-1-4/12.txt';
import code13 from '@/assets/code/mcs-1-4/13.txt';
import code14 from '@/assets/code/mcs-1-4/14.txt';
import code15 from '@/assets/code/mcs-1-4/15.txt';
import code16 from '@/assets/code/mcs-1-4/16.txt';
import code17 from '@/assets/code/mcs-1-4/17.txt';
import code18 from '@/assets/code/mcs-1-4/18.txt';
import code19 from '@/assets/code/mcs-1-4/19.txt';
import code2 from '@/assets/code/mcs-1-4/2.txt';
import code20 from '@/assets/code/mcs-1-4/20.txt';
import code21 from '@/assets/code/mcs-1-4/21.txt';
import code3 from '@/assets/code/mcs-1-4/3.txt';
import code4 from '@/assets/code/mcs-1-4/4.txt';
import code5 from '@/assets/code/mcs-1-4/5.txt';
import code6 from '@/assets/code/mcs-1-4/6.txt';
import code7 from '@/assets/code/mcs-1-4/7.txt';
import code8 from '@/assets/code/mcs-1-4/8.txt';
import code9 from '@/assets/code/mcs-1-4/9.txt';
import img1 from '@/assets/images/posts/mcs-1-4/1.png';
import img2 from '@/assets/images/posts/mcs-1-4/2.png';
import CodeView from '@/components/CodeView';
import Anim from '@/components/animated';
import { Divider, Image, Typography } from 'antd';
import { Link } from 'umi';

/// title: MC开服指北: 1.自制认证服务器 Part4
/// desc: 指北的意思是朝着相反的方向，绕地球走一圈并到达目的地
/// folder: docs/文档
/// tags: Minecraft,rust,server
/// next: /posts/Build-MCS/1-auth-backend-p5
/// sugg: Minecraft,rust,server
/// create: 2023-11-30 12:49:31
/// update: 2023-11-30 21:19:10

const TT = Typography.Title;
const TP = Typography.Paragraph;
const TE = Typography.Text;
const TL = Typography.Link;
const IM = Image;
const LK = Link;
const CV = CodeView;

export default function Content(props: {}) {
  return (
    <Anim k='p_buildmcs_1-auth-backend-p4'>
      <TT level={2}>
        <del>2D</del>建模
      </TT>
      <TP>
        在<LK to="/posts/Build-MCS/1-auth-backend-p3">上个 part</LK> 中,
        我们初步完善了登录API, 接下来我们继续完善之前在<code>src/models</code>
        目录下挖的坑
      </TP>
      <TP>
        打开<code>src/models/login.rs</code>, 在<code>login_resp</code>
        模块中有两个<code>// todo</code>, 我们将完成这些结构体
      </TP>
      <TP>
        首先删掉<code>src/models/login.rs</code>的<code>login_resp</code>
        模块中的<code>Profile</code>和<code>User</code>结构体,
        我们将把它们移动到两个单独的文件中
      </TP>
      <TP>
        参考
        <TL href="https://github.com/yushijinhun/authlib-injector/wiki/Yggdrasil-%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%8A%80%E6%9C%AF%E8%A7%84%E8%8C%83#%E8%A7%92%E8%89%B2%E4%BF%A1%E6%81%AF%E7%9A%84%E5%BA%8F%E5%88%97%E5%8C%96">
          角色信息的序列化
        </TL>
        , 在<code>src/models</code>下创建并编辑<code>profile.rs</code>文件
      </TP>
      <CV file={code1} language="rust" />
      <TP>
        然后参考
        <TL href="https://github.com/yushijinhun/authlib-injector/wiki/Yggdrasil-%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%8A%80%E6%9C%AF%E8%A7%84%E8%8C%83#%E7%94%A8%E6%88%B7%E4%BF%A1%E6%81%AF%E7%9A%84%E5%BA%8F%E5%88%97%E5%8C%96">
          用户信息的序列化
        </TL>
        , 在<code>src/models</code>下创建并编辑<code>user.rs</code>文件
      </TP>
      <CV file={code2} language="rust" />
      <TP>
        在<code>src/models/mod.rs</code>中导出<code>src/models/user.rs</code>和
        <code>src/models/profile.rs</code>文件
      </TP>
      <CV file={code3} language="rust" />
      <TP>
        在<code>src/models/login.rs</code>中导入<code>src/models/user.rs</code>
        和<code>src/models/profile.rs</code>中的<code>User</code>和
        <code>Profile</code>结构体
      </TP>
      <CV file={code4} language="rust" />
      <TP>
        在<code>src/main.rs</code>中导入<code>src/models/profile.rs</code>和<code>src/models/user.rs</code>,
        然后改改<code>login</code>函数, 然后测试一下HMCL能不能正确解析这个响应
      </TP>
      <CV file={code5} language="rust" />
      <TP>编译运行，试一下吧~</TP>
      <CV file={code6} language="plaintext" />
      <TP>在 HMCL 里试试</TP>
      <IM src={img1} />
      <Divider />
      <TT level={2}>登录的安全性</TT>
      <TP>好耶, 接下来我们继续完善这个函数</TP>
      <TP>
        为了提高登录的安全性, 避免角色名被暴力枚举, 我们约定两种登录用户名
      </TP>
      <TP>
        <TP>
          邮箱登录: <code>xxx@aaa.com</code>
          <TP italic>登录后不会自动选择角色</TP>
        </TP>
        <TP>
          角色名+邮箱登录: <code>profile:xxx@aaa.com</code>
          <TP italic>
            登录后自动选择角色, 本例中会选择<code>profile</code>角色
          </TP>
        </TP>
      </TP>
      <TP>
        在<code>src/main.rs</code>中改改<code>login</code>函数
      </TP>
      <CV file={code7} language="rust" />
      <TP>编译运行，试一下吧~</TP>
      <CV file={code8} language="plaintext" />
      <TP>在 HMCL 里试试</TP>
      <IM src={img2} />
      <Divider />
      <TT level={2}>配置文件</TT>
      <TP>
        配置文件是一个服务的<del>必不可少的</del>组成部分,
        我们通过配置文件来自定义服务的行为, 而不必重新编译代码
      </TP>
      <TP>
        接下来我们在<code>Cargo.toml</code>中添加一个第三方库<code>toml</code>
      </TP>
      <CV file={code9} language="toml" />
      <TP>
        在<code>src</code>目录下创建并编辑<code>settings.rs</code>文件
      </TP>
      <CV file={code10} language="rust" />
      <TP>
        更新<code>src/lib.rs</code>, 使<code>src/settings.rs</code>可以被
        <code>src/main.rs</code>引用
      </TP>
      <CV file={code11} language="rust" />
      <TP>
        在<code>src/main.rs</code>中导入<code>src/settings.rs</code>中的
        <code>Settings</code>结构体
      </TP>
      <CV file={code12} language="rust" />
      <TP>
        写一些代码, 在<code>src/main.rs</code>的<code>main</code>
        函数中读取配置文件
      </TP>
      <CV file={code13} language="rust" />
      <TP>编译运行，试一下吧~</TP>
      <CV file={code14} language="plaintext" />
      <TP>
        好耶, 接下来试试创建并编辑<code>Settings.toml</code>配置文件
      </TP>
      <CV file={code15} language="toml" />
      <TP>编译运行，试一下吧~</TP>
      <CV file={code16} language="plaintext" />
      <TP>
        配置也应该在能够在<code>Handler</code>中被读取到, 所以我们也需要把它加入
        <code>AppState</code>结构体
      </TP>
      <TP>
        在<code>src/app_state.rs</code>中导入<code>src/settings.rs</code>中的
        <code>Settings</code>结构体, 并编辑<code>src/app_state.rs</code>中的
        <code>AppState</code>结构体, 添加一个字段
      </TP>
      <CV file={code17} language="rust" />
      <TP>
        在<code>src/main.rs</code>的<code>main</code>函数中更新对
        <code>AppState</code>结构体的初始化
      </TP>
      <CV file={code18} language="rust" />
      <TP>
        在<code>src/main.rs</code>的<code>index</code>函数中,
        实现从配置中读取相关字段并作为<code>Handler</code>的响应
      </TP>
      <CV file={code19} language="rust" />
      <TP>编译运行，试一下吧~</TP>
      <CV file={code20} language="plaintext" />
      <TP>用 curl 试试</TP>
      <CV file={code21} language="plaintext" />
      <Divider />
      <TT level={2}>Next Step</TT>
      <TP>
        <TP>
          在下一 part 的文章中, 我们将实现生成<code>access token</code>
          的逻辑，并完整实现登录功能, 和实现一个供内部使用的注册API
        </TP>
      </TP>
    </Anim>
  );
}
