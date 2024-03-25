const ___root = document.getElementById('root');
const loadBg = document.createElement('div');
loadBg.classList.add('__load__background');
const loadBgInner = document.createElement('div');
loadBgInner.classList.add('__load__background_inner');
const loadAnimWarp = document.createElement('div');
loadAnimWarp.classList.add('__load__animation_warp');
const loadAnim = document.createElement('div');
loadAnim.classList.add('__load__animation');
const loadText = document.createElement('div');
loadText.classList.add('__load__text');
loadText.innerText = "页面加载中";
// === danger zone ===
// copied from https://stackoverflow.com/a/18230432
window.___getRandomInt = function (min, max) {
  // Create byte array and fill with 1 random number
  let byteArray = new Uint8Array(1);
  window.crypto.getRandomValues(byteArray);
  let range = max - min + 1;
  let max_range = 256;
  if (byteArray[0] >= Math.floor(max_range / range) * range)
    return ___getRandomInt(min, max);
  return min + (byteArray[0] % range);
}
// copied from https://github.com/richardschneider/crypto-shuffle
window.___shuffle = function (a) {
  let n = a.length, // The number of items left to shuffle (loop invariant)
    r = new Uint8Array(n), // Some random values
    k, t;
  window.crypto.getRandomValues(r);
  while (n > 1) {
    k = r[n - 1] % n; // 0 <= k < n
    t = a[--n]; // swap elements n and k
    a[n] = a[k];
    a[k] = t;
  }
  return a; // for a fluent API
}
// 能用就行, 不能用是浏览器问题
window.___xwp9w59h0458m45gm5gh9503huerueqrnq___ = function (arr) {
  if (arr.length === 0) {
    return null;
  }
  window.___shuffle(arr);
  return arr[window.___getRandomInt(0, arr.length - 1)];
}
// === ===
// 总感觉放在这里会有一点点安全感 
loadAnimWarp.appendChild(loadAnim);
loadBgInner.appendChild(loadAnimWarp);
loadBgInner.appendChild(loadText);
loadBg.appendChild(loadBgInner);
___root.appendChild(loadBg);
// 代码重用是程序员的良好品德
window._getRandomLoadTitle = function () {
  let traceTime = (Math.random() * 10000000).toFixed() + "." + (Math.random() * 999999).toFixed();
  let tracePID = Math.floor(Math.random() * 100000);
  let traceProcess = window.___xwp9w59h0458m45gm5gh9503huerueqrnq___(["electron", "firefox", "chrome",
    "chromium", "node", "pulseaudio", "cat", "wine", "syncthing",
    "gcc", "g++", "make", "go", "rustc", "cargo", "rustup",
    "systemd", "runsv", "main", "postgres",
    "mysql", "mysqld", "mariadb", "gdm"
  ]);
  let notDefined = window.___xwp9w59h0458m45gm5gh9503huerueqrnq___([
    "React", "vue", "window", "Date", "Math", "theme", "a", "r00t", "iayout", "undefined",
    "false", "False", "true", "True", "$", "Object", "anonymous", "webpack", "_webpack", "div",
    "array", "number", "string", "class", "type", "let", "fetch", "printf", "fmt", "async",
  ]);
  return window.___xwp9w59h0458m45gm5gh9503huerueqrnq___([
    "少女祈祷中", "少女折寿中", "页面加载中", "页面卸载中", "喵喵喵喵中", "床上贴贴中", "幼乐园中", "先进萝莉中", "拿起按摩棒中", "好⾼潮中", "拿起绳子中", "色图拍摄中", "色图绘制中", "莉沫块养蛇中",
    "莉沫块养火鸡中", "给你们看我中", "成语接龙中", "及时行乐中", "滚回垃圾堆中", "赶紧打钱中", "帮我变聪明中", "全群变成妹子中", "祈祷全群变成妹子中", "变成小姐姐中", "把你们都变成小姐姐中",
    "完全自杀中", "完全自救中", "心理危机中", "G25gle中", "Google索引中", "笨蛋妹妹中", "画师酱帮我中", "my:蜜液中", "收到推送中", "吃莉沫酱中", "快快上床中", "色色推荐中", "后庭偷拍中",
    "要高潮中", "主人射精中", "最爱主人中", "射到嘴里中", "啊啊啊中", "主人好棒中", "啊~嗯~", "主人好棒中", "爱大鸡巴中", "好耶中", "啪揉乳揉乳揉乳中", "拿去炼丹中", "色图发送中", "给大佬递尾巴中",
    "请坐和放宽", "马上就好", "Loading", "转圈圈中", "我们中出了一个页面", "揉乳学校中", "先进萝莉魅魔中", "萝莉魅魔中", "自动修复中", "好吻中", "好看的色图中", "幼女上床中", "好长溢出中",
    "海内存知己，天涯若比邻", "这可能需要几世纪", "这可能需要几分钟", "这可能需要几年", "这可能需要几小时", "星奸淫窟中", "毫无魅力中", "我来帮你中", "仅裸体中", "幼女每日计划中", "鸡巴硬了中",
    "千门万户曈曈日，总把新桃换旧符", "Windows更新为你的安全保驾护航", "请勿关闭电脑", "女生服务中", "不会用git中", "鲸鱼愤怒中", "快到我床上中", "上海恶萝莉中", traceProcess + "运行中",
    "正在进行高级清除", "代码编译中", "Uncaught ReferenceError: " + notDefined + " is not defined", "可爱揉乳中", "揉摸乳房中", "看看淫纹中", "垃圾代码中", traceProcess + "崩溃中", "涩cp中",
    "cat: /etc/shadow: 权限不够", "杂鱼~中出中", "奠报传来消息中", "机场跑路中", "我们中出了一个页面", "ssh连接中", "持续高潮中", "发睡觉表情中", "抱住蹭蹭中", traceProcess + "挂起中", "涩发偷拍中",
    "调教病娇中", "抓回家中", "偷欢⾼潮中", "伦理⽑中", "烛光晚餐中", "群主萝莉中", "变成少女中", "成为老婆中", "二次中出中", "好吃缓存中", "变成小幼女中", "PGP安全中", "幼女睡觉中", "莉沫酱养蛇中",
    "憋不出话!", "幼女娱乐中", "贴贴抱抱中", "小就是好", "小就是幼", "幼就是小", "幼就是好", "幼女再教育中", "上床涩涩中", "服务启动中", "魔法少女中", "每日沙雕中", "小幼女喵中", "幼女化注射中",
    "想玩捆绑中", "渴望期待中", "变成RBQ中", "给你安装跳蛋中", "开穴看看中", "穴口大开中", "看穴下菜中", "交流性技中", "好⼤乳中", "群主是幼女中", "温柔一点中", "已杀死" + traceProcess,
    "[" + traceTime + "] Out of memory: Killed process " + tracePID + " (" + traceProcess + ")",
  ]) + "..."
}
loadText.innerText = window._getRandomLoadTitle();

const rootDir = "/blog";

const YES_IT_IS_PROD_MODE_UNLESS_YOU_CAN_CHANGE_ME__UgVyolk07spJPsHG = false;

const _prodMode = YES_IT_IS_PROD_MODE_UNLESS_YOU_CAN_CHANGE_ME__UgVyolk07spJPsHG;

const AND_THIS_IS_PRODUCTION_FILES__0sUAUaI9Wo7LcFCC = {};

const _prodFiles = AND_THIS_IS_PRODUCTION_FILES__0sUAUaI9Wo7LcFCC;

const FINALLY_THIS_IS_THE_BUILD_ID_AND_DONT_CHANGE_IT__5CapX6vlkVv6ZvqB = {};

const _buildId = FINALLY_THIS_IS_THE_BUILD_ID_AND_DONT_CHANGE_IT__5CapX6vlkVv6ZvqB;

window._BUILD_TIME__NvGiV4LVLpzpI3si = -1;

function fixFinally(failedList) {
  const ___root = document.getElementById('root');
  const fixResult = document.createElement('div');
  fixResult.classList.add('__failed__text');
  fixResult.innerText = "-=-=-=-=-=-=-=-=-=-";
  ___root.appendChild(fixResult);
  if (failedList.length !== 0) {
    const fixResult1 = document.createElement('div');
    fixResult1.classList.add('__failed__text');
    fixResult1.innerText = "这些文件请求失败啦:";
    ___root.appendChild(fixResult1);
    for (let index = 0; index < failedList.length; index++) {
      const f = failedList[index];
      let nya = document.createElement('div');
      nya.classList.add('__failed__text');
      nya.innerText = "「" + f + "」";
      ___root.appendChild(nya);
    }
    const fixResult2 = document.createElement('div');
    fixResult2.classList.add('__failed__text');
    fixResult2.innerText = "-=-=-=-=-=-=-=-=-=-";
    ___root.appendChild(fixResult2);
  }
  const fixResult3 = document.createElement('div');
  fixResult3.classList.add('__failed__text');
  fixResult3.innerText = "页面将在 1 秒后刷新...";
  ___root.appendChild(fixResult3);
  setTimeout(() => { location.reload() }, 1000);
}

window._on_load_failed = function () {
  const ___root = document.getElementById('root');
  const failedText = document.createElement('div');
  failedText.classList.add('__failed__text');
  failedText.innerText = "坏耶! 页面炸啦!";
  const failedText1 = document.createElement('div');
  failedText1.classList.add('__failed__text');
  const failedText2 = document.createElement('div');
  failedText2.classList.add('__failed__text');
  if (_prodMode) {
    failedText1.innerText = "一定是浏览器和 CloudFlare 联合制造的一场灾难!";
    failedText2.innerText = "不过不用担心, 这个网页会尝试自动修复!";
  } else {
    failedText1.innerText = "一定是 DOM 树被悄悄改了!";
    failedText2.innerText = "> 点这行字刷新试试 <";
    failedText2.onclick = function (_ev) {
      location.reload(true);
    }
  }
  ___root.appendChild(failedText);
  ___root.appendChild(failedText1);
  ___root.appendChild(failedText2);
  if (_prodMode) {
    const fixStatus = document.createElement('div');
    fixStatus.classList.add('__failed__text');
    fixStatus.innerText = "「请稍候...」";
    ___root.appendChild(fixStatus);
    let prodLen = _prodFiles.list.length;
    let prodSucc = 0;
    let prodErr = [];
    for (let index = 0; index < prodLen; index++) {
      const file = _prodFiles.list[index];
      fetch(rootDir + "/" + file, { cache: "reload" }).then((resp) => { return resp.status === 200 }).then((stat) => {
        if (stat) {
          prodSucc++;
        } else {
          prodErr.push(file)
        }
        fixStatus.innerText = "已完成「" + prodSucc + "/" + prodLen + "」, 遇到惹「" + prodErr.length + "」个错误";
        if (index === prodLen - 1) {
          fixFinally(prodErr);
        }
      }).catch((_reason) => {
        prodErr.push(file)
        fixStatus.innerText = "已完成「" + prodSucc + "/" + prodLen + "」, 遇到惹「" + prodErr.length + "」个错误";
        if (index === prodLen - 1) {
          fixFinally(prodErr);
        }
      });
    }
  }
}
let _check_counter_ = 0;
let _check_interval = 0;
function checkRootForChildren() {
  const root = document.getElementById("root");
  if (root && root.childElementCount === 0) {
    _check_counter_++;
  }
  if (root && root.childElementCount === 0 && _check_counter_ > 10) {
    _check_counter_ = 0;
    clearInterval(_check_interval);
    window._on_load_failed();
  }
}
_check_interval = setInterval(checkRootForChildren, 100);

function refreshPage() {
  const rootElement = document.getElementById("root");
  while (rootElement.firstChild) {
    rootElement.removeChild(rootElement.firstChild);
  }
  const pageBg = document.createElement('div');
  pageBg.classList.add('__first_screen_bg');
  rootElement.appendChild(pageBg);
  const pageBox = document.createElement('div');
  pageBox.classList.add('__first_screen_box');
  pageBg.appendChild(pageBox);
  const pageBoxTitleBox = document.createElement('div');
  pageBoxTitleBox.classList.add('__first_screen_title_box');
  pageBox.appendChild(pageBoxTitleBox);
  const pageBoxTextBox = document.createElement('div');
  pageBoxTextBox.classList.add('__first_screen_text_box');
  pageBox.appendChild(pageBoxTextBox);
  const pageBoxTitle = document.createElement('div');
  pageBoxTitle.classList.add('__first_screen_title');
  pageBoxTitle.innerText = "喵呜~";
  pageBoxTitleBox.appendChild(pageBoxTitle);
  const pageBoxText1 = document.createElement('div');
  pageBoxText1.classList.add('__first_screen_text');
  pageBoxText1.innerText = "本站有新版本啦~";
  pageBoxTextBox.appendChild(pageBoxText1);
  const pageBoxText2 = document.createElement('div');
  pageBoxText2.classList.add('__first_screen_text');
  pageBoxText2.innerText = "页面会在 2 秒后自动刷新...";
  pageBoxTextBox.appendChild(pageBoxText2);
  setTimeout(() => { location.reload() }, 2000);
}

let _check_build_id_timer = 0;

function checkBuildId() {
  if (!_prodMode) {
    return;
  }
  fetch(rootDir + "/" + _buildId.f, { cache: "reload" }).then(async (resp) => {
    return (resp.status === 200) && (await resp.text().then((v) => { return v.startsWith(_buildId.c) })).valueOf();
  }).then((stat) => {
    if (stat) {
      // 好!
      _check_build_id_timer = setTimeout(checkBuildId, 10000);
    } else {
      // 奸!
      console.error("构建 ID 不符合预期, 正在故意制造一场灾难...");
      refreshPage();
    }
  }).catch((_reason) => {
    // 奸!
    // wait, 情有可原, 请手下留情!
    console.error(_reason);
    console.error("构建 ID 获取失败, 请检查网络");
    _check_build_id_timer = setTimeout(checkBuildId, 10000);
  });
}

_check_build_id_timer = setTimeout(checkBuildId, 3000);
