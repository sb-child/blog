import code1 from '@/assets/code/mcs-1-5/1.txt';
import code10 from '@/assets/code/mcs-1-5/10.txt';
import code11 from '@/assets/code/mcs-1-5/11.txt';
import code12 from '@/assets/code/mcs-1-5/12.txt';
import code13 from '@/assets/code/mcs-1-5/13.txt';
import code14 from '@/assets/code/mcs-1-5/14.txt';
import code15 from '@/assets/code/mcs-1-5/15.txt';
import code16 from '@/assets/code/mcs-1-5/16.txt';
import code17 from '@/assets/code/mcs-1-5/17.txt';
import code18 from '@/assets/code/mcs-1-5/18.txt';
import code19 from '@/assets/code/mcs-1-5/19.txt';
import code2 from '@/assets/code/mcs-1-5/2.txt';
import code20 from '@/assets/code/mcs-1-5/20.txt';
import code21 from '@/assets/code/mcs-1-5/21.txt';
import code22 from '@/assets/code/mcs-1-5/22.txt';
import code23 from '@/assets/code/mcs-1-5/23.txt';
import code24 from '@/assets/code/mcs-1-5/24.txt';
import code25 from '@/assets/code/mcs-1-5/25.txt';
import code26 from '@/assets/code/mcs-1-5/26.txt';
import code27 from '@/assets/code/mcs-1-5/27.txt';
import code28 from '@/assets/code/mcs-1-5/28.txt';
import code29 from '@/assets/code/mcs-1-5/29.txt';
import code3 from '@/assets/code/mcs-1-5/3.txt';
import code30 from '@/assets/code/mcs-1-5/30.txt';
import code31 from '@/assets/code/mcs-1-5/31.txt';
import code32 from '@/assets/code/mcs-1-5/32.txt';
import code33 from '@/assets/code/mcs-1-5/33.txt';
import code34 from '@/assets/code/mcs-1-5/34.txt';
import code35 from '@/assets/code/mcs-1-5/35.txt';
import code36 from '@/assets/code/mcs-1-5/36.txt';
import code37 from '@/assets/code/mcs-1-5/37.txt';
import code38 from '@/assets/code/mcs-1-5/38.txt';
import code39 from '@/assets/code/mcs-1-5/39.txt';
import code4 from '@/assets/code/mcs-1-5/4.txt';
import code40 from '@/assets/code/mcs-1-5/40.txt';
import code41 from '@/assets/code/mcs-1-5/41.txt';
import code42 from '@/assets/code/mcs-1-5/42.txt';
import code43 from '@/assets/code/mcs-1-5/43.txt';
import code44 from '@/assets/code/mcs-1-5/44.txt';
import code45 from '@/assets/code/mcs-1-5/45.txt';
import code46 from '@/assets/code/mcs-1-5/46.txt';
// import code47 from '@/assets/code/mcs-1-5/47.txt';
// import code48 from '@/assets/code/mcs-1-5/48.txt';
// import code49 from '@/assets/code/mcs-1-5/49.txt';
import code5 from '@/assets/code/mcs-1-5/5.txt';
import code6 from '@/assets/code/mcs-1-5/6.txt';
import code7 from '@/assets/code/mcs-1-5/7.txt';
import code8 from '@/assets/code/mcs-1-5/8.txt';
import code9 from '@/assets/code/mcs-1-5/9.txt';
import img1 from '@/assets/images/posts/mcs-1-5/1.png';
import CodeView from '@/components/CodeView';
import Anim from '@/components/animated';
import { Divider, Image, Typography } from 'antd';
import { Link } from 'umi';

/// title: MC开服指北: 1.自制认证服务器 Part5
/// desc: 有时，孤独会带来一种动力
/// folder: docs/文档
/// tags: Minecraft,rust,server
/// next: /
/// sugg: Minecraft,rust,server
/// create: 2023-11-30 21:19:10
/// update: 2023-11-30 21:19:10
/// hide

const TT = Typography.Title;
const TP = Typography.Paragraph;
const TE = Typography.Text;
const TL = Typography.Link;
const IM = Image;
const LK = Link;
const CV = CodeView;

export default function Content(props: {}) {
  return (
    <Anim k="p_buildmcs_1-auth-backend-p5">
      <TT level={2}>尚未完成</TT>
      <TT level={2}>
        <del>to</del>do
      </TT>
      <TP>
        在<LK to="/posts/Build-MCS/1-auth-backend-p4">上个 part</LK> 中,
        我们又完善了登录API, 接下来我们先完成一些上个part没有完成的事情
      </TP>
      <TP>
        参考
        <TL href="https://github.com/yushijinhun/authlib-injector/wiki/Yggdrasil-%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%8A%80%E6%9C%AF%E8%A7%84%E8%8C%83#textures-%E6%9D%90%E8%B4%A8%E4%BF%A1%E6%81%AF%E5%B1%9E%E6%80%A7">
          <code>textures</code>材质信息属性
        </TL>
        , 在<code>src/models</code>下创建并编辑<code>textures.rs</code>文件
      </TP>
      <CV file={code1} language="rust" />
      <TP>
        在<code>src/models/mod.rs</code>中导出
        <code>src/models/textures.rs</code>文件
      </TP>
      <CV file={code2} language="rust" />
      <TP>
        把一些无关紧要的文件写在<code>.gitignore</code>里
      </TP>
      <CV file={code3} language="plaintext" />
      <TP>
        在<code>src/settings.rs</code>中再加一些配置项
      </TP>
      <CV file={code4} language="rust" />
      <TP>
        改改<code>src/main.rs</code>里的<code>login</code>函数
      </TP>
      <CV file={code5} language="rust" />
      <Divider />
      <TT level={2}>制造，分发和销毁令牌</TT>
      <TP>
        参考
        <TL href="https://github.com/yushijinhun/authlib-injector/wiki/Yggdrasil-%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%8A%80%E6%9C%AF%E8%A7%84%E8%8C%83#%E4%BB%A4%E7%89%8Ctoken">
          这个
        </TL>
        文档, 我们将在<code>src/main.rs</code>的<code>login</code>
        函数里实现令牌的生成
      </TP>
      <TP>
        在<code>Cargo.toml</code>中添加一个第三方库<code>rand</code>
        用于生成随机数, 和另一个第三方库<code>uuid</code>用于生成uuid
      </TP>
      <CV file={code8} language="toml" />
      <TT level={3}>制造令牌制造机</TT>
      <TP>
        先造个令牌制造机, 在<code>src</code>目录下创建<code>utils</code>目录,
        用来放一些可能会经常用到的东西
      </TP>
      <TP>
        然后在<code>src/utils</code>目录下创建并编辑<code>mod.rs</code>文件,
        定义<code>gen_access_token</code>, <code>gen_uuid</code>和
        <code>add_token</code>函数
      </TP>
      <CV file={code6} language="rust" />
      <TP>
        更新<code>src/lib.rs</code>, 使<code>src/utils/mod.rs</code>可以被
        <code>src/main.rs</code>引用
      </TP>
      <CV file={code7} language="rust" />
      <TP>
        在<code>src/main.rs</code>中导入<code>src/utils/mod.rs</code>
      </TP>
      <CV file={code9} language="rust" />
      <TP>
        在<code>src/main.rs</code>的<code>index</code>函数中, 生成随机的
        <code>access_token</code>, 并根据情况生成随机的<code>client_token</code>
        或使用来自客户端的<code>client_token</code>
      </TP>
      <CV file={code10} language="rust" />
      <TP>
        在<code>src/main.rs</code>的<code>index</code>函数的
        <code>transaction</code>闭包中, 复制闭包外的<code>access_token</code>和
        <code>client_token</code>, 以在内部的异步闭包内引用
      </TP>
      <CV file={code11} language="rust" />
      <TP>
        在<code>src/main.rs</code>的<code>index</code>函数的
        <code>transaction</code>异步闭包中, 使<code>profile</code>提前
        <code>unwrap</code>
      </TP>
      <CV file={code12} language="rust" />
      <TP>
        在<code>src/main.rs</code>的<code>index</code>函数的
        <code>transaction</code>异步闭包中, 调用<code>utils::add_token</code>
        函数, 并包装<code>profile</code>作为返回值的一部分
      </TP>
      <CV file={code13} language="rust" />
      <TP>
        在<code>src/main.rs</code>的<code>index</code>函数的
        <code>transaction</code>异步闭包中的<code>match</code>的另一个分支中,
        调用<code>utils::add_token</code>函数
      </TP>
      <CV file={code14} language="rust" />
      <TT level={3}>令牌的管理</TT>
      <TP>好啦, 现在我们有了令牌制造机, 然后我们还需要管理令牌的状态</TP>
      <TP>
        在<code>prisma/schema.prisma</code>的<code>Setting</code>模型中,
        添加两个字段: <code>tokenNeedRefreshDuration</code>和
        <code>tokenInvalidDuration</code>
      </TP>
      <CV file={code15} language="prisma" />
      <TP>应用更改到数据库和 binding</TP>
      <CV file={code16} language="plaintext" />
      <TP>为了细化令牌的管理, 我们约定: </TP>
      <TP>
        如果用户没有设置过最大令牌数, 令牌暂时失效时间和令牌永久失效时间,
        则应用配置文件中的设置, 否则应用用户的设置
      </TP>
      <TP>
        编辑<code>src/settings.rs</code>文件, 添加一些配置项
      </TP>
      <CV file={code17} language="rust" />
      <TP>
        编辑<code>src/utils/mod.rs</code>文件, 定义函数<code>check_tokens</code>
      </TP>
      <CV file={code18} language="rust" />
      <TP>
        在<code>Cargo.toml</code>中添加一个第三方日期时间库<code>chrono</code>
      </TP>
      <CV file={code19} language="toml" />
      <TP>
        编辑<code>src/utils/mod.rs</code>文件, 在<code>check_tokens</code>
        函数中, 获取并遍历用户列表
      </TP>
      <CV file={code20} language="rust" />
      <TP>
        编辑<code>src/utils/mod.rs</code>文件, 在<code>check_tokens</code>函数的
        <code>map</code>闭包中, 获取每个用户的可用 token, 暂时失效 token
        和用户设置, 并按创建时间降序排序(但不立即执行这些查询)
      </TP>
      <CV file={code21} language="rust" />
      <TP>
        编辑<code>src/utils/mod.rs</code>文件的<code>check_tokens</code>函数,
        批量执行上述查询, 它将返回一个数组, 包含每个用户的上述查询结果
      </TP>
      <CV file={code22} language="rust" />
      <TP>
        编辑<code>check_tokens</code>函数, 获取当前时间
      </TP>
      <CV file={code23} language="rust" />
      <TP>
        编辑<code>check_tokens</code>函数, 使用 for 循环遍历上述查询结果
      </TP>
      <CV file={code24} language="rust" />
      <TP>
        在上述循环内获取当前用户的<code>maxToken</code>,{' '}
        <code>tokenNeedRefreshDuration</code>和<code>tokenInvalidDuration</code>
      </TP>
      <CV file={code25} language="rust" />
      <TP>
        在上述循环内定义可变变量<code>token_counter</code>, 初值为
        <code>max_tokens</code>的值
      </TP>
      <CV file={code26} language="rust" />
      <TP>
        在上述循环内遍历用户的可用 token, 标记过期的 token 为暂时失效,
        并将多余的 token 标记为永久失效
      </TP>
      <CV file={code27} language="rust" />
      <TP>在上述循环内遍历用户的暂时失效 token, 标记过期的 token 为永久失效</TP>
      <CV file={code28} language="rust" />
      <TP>
        改改<code>src/main.rs</code>里的<code>login</code>函数, 在另一个
        <code>transaction</code>中检查并刷新 token 的状态
      </TP>
      <CV file={code29} language="rust" />
      <TP>编译运行，在 HMCL 里登录试一下吧~</TP>
      <CV file={code30} language="plaintext" />
      <TP>
        在<code>Settings.toml</code>中, 改改令牌过期时间
      </TP>
      <CV file={code31} language="toml" />
      <TP>然后编译运行，在 HMCL 里登录试一下吧~</TP>
      <CV file={code32} language="plaintext" />
      <TP>好耶~ well done</TP>
      <TT level={3}>分发令牌</TT>
      <TP>
        <del>too young too naive</del>
      </TP>
      <TP>
        改改<code>src/main.rs</code>里的<code>login</code>函数
      </TP>
      <CV file={code33} language="rust" />
      <Divider />
      <TT level={2}>作出正确的回应</TT>
      <TP>
        在作出正确的回应之前, 我们应该先确保数据库里的东西是正确的...比如 uuid
      </TP>
      <TP>
        在<code>src/main.rs</code>的<code>main</code>函数里更新指定用户和角色的
        uuid 为随机的 uuid
      </TP>
      <CV file={code34} language="rust" />
      <TP>然后编译运行~</TP>
      <CV file={code35} language="plaintext" />
      <TP>
        在<code>src/main.rs</code>的<code>main</code>
        函数里把刚刚添加的代码注释掉
      </TP>
      <CV file={code36} language="rust" />
      <TP>在数据库里检查一下</TP>
      <CV file={code37} language="plaintext" />
      <TP>好耶~ 接下来我们继续折腾吧</TP>
      <TT level={3}>理性地表达错误</TT>
      <TP>
        在
        <TL href="https://github.com/yushijinhun/authlib-injector/wiki/Yggdrasil-%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%8A%80%E6%9C%AF%E8%A7%84%E8%8C%83#%E9%94%99%E8%AF%AF%E4%BF%A1%E6%81%AF%E6%A0%BC%E5%BC%8F">
          这个章节
        </TL>
        中所述, 我们的服务需要按照指定格式返回错误信息和 HTTP 状态码,
        以帮助客户端更好地理解 what happened
      </TP>
      <TP>接下来我们要定义错误的结构</TP>
      <TP>
        在<code>src/models</code>下创建并编辑<code>error.rs</code>文件
      </TP>
      <CV file={code38} language="rust" />
      <TP>
        在<code>src/models/mod.rs</code>中导出<code>src/models/error.rs</code>
        文件
      </TP>
      <CV file={code39} language="rust" />
      <TP>
        在<code>src/models/error.rs</code>里写一些<code>new</code>
        方法用来快捷的初始化不同种类的<code>Error</code>
      </TP>
      <CV file={code40} language="rust" />
      <TP>
        和用来转换成响应格式的<code>to_response</code>方法
      </TP>
      <CV file={code41} language="rust" />
      <TP>
        在<code>src/main.rs</code>中导入<code>src/models/error.rs</code>
      </TP>
      <CV file={code42} language="rust" />
      <TP>
        在<code>src/main.rs</code>改改<code>login</code>函数的返回类型
      </TP>
      <CV file={code43} language="rust" />
      <TP>
        注释掉<code>src/main.rs</code>中<code>login</code>的返回值, 然后返回
        <code>Error</code>试试
      </TP>
      <CV file={code44} language="rust" />
      <TP>编译运行，试一下吧~</TP>
      <CV file={code45} language="plaintext" />
      <TP>在 HMCL 里试试</TP>
      <IM src={img1} />
      <TP>好耶~ 现在客户端可以正确理解服务端的错误啦</TP>
      <TP>当然, 我们还需要让服务端分情况返回何种响应</TP>
      <CV file={code46} language="rust" />
      <TT level={3}>组装成功响应</TT>
    </Anim>
  );
}
