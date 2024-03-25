// import codeSample from '@/assets/code/code-sample.txt';
// import imgSample from '@/assets/images/posts/img-sample.png';

import init, {
  Game,
  InitOutput,
  // initThreadPool,
  ping,
} from '@sbchild/sbchild-game';
import wasm from '@sbchild/sbchild-game/sbchild_game_bg.wasm';
import { message } from 'antd';

import React from 'react';
import { JSX } from 'react/jsx-runtime';

export default function Main(props: {}) {
  return (
    <div>
      <Canvas />
    </div>
  );
}

function easeIn(x: number) {
  if (x < 0) {
    return 0;
  }
  if (x > 1) {
    return 1;
  }
  return Math.pow(x, 1.675);
}

function easeOut(x: number) {
  if (x < 0) {
    return 0;
  }
  if (x > 1) {
    return 1;
  }
  return 1 - Math.pow(1 - x, 1.675);
}

function easeInOut(x: number) {
  if (x < 0) {
    return 0;
  }
  if (x > 1) {
    return 1;
  }
  return 0.5 * (Math.sin((x - 0.5) * Math.PI) + 1);
}

function easeInOutQuint(x: number): number {
  return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
}

function draw(
  ctx: CanvasRenderingContext2D,
  ts: number,
  w: number,
  h: number,
  opts: {
    wasmLoaded: boolean;
    wasmFailed: boolean;
    wasmVerify: boolean;
  },
) {
  const mw = w / 2;
  const mh = h / 2;
  ctx.clearRect(0, 0, w, h);
  ctx.beginPath();
  ctx.strokeStyle = '#ff0000';
  ctx.lineWidth = 2;
  // ctx.moveTo(0, 0);
  // ctx.lineTo(w, h);
  // ctx.moveTo(0, h);
  // ctx.lineTo(w, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.strokeStyle =
    'rgba(255,255,255,' + easeInOut((ts - 1500) / 2000).toString() + ')';
  ctx.lineWidth = 2;
  ctx.moveTo(mw - 100 - 5, mh - 5);
  ctx.lineTo(mw + 100 + 5, mh - 5);
  ctx.moveTo(mw - 100 - 5, mh + 5);
  ctx.lineTo(mw + 100 + 5, mh + 5);
  ctx.moveTo(mw - 100 - 5, mh - 5);
  ctx.lineTo(mw - 100 - 5, mh + 5);
  ctx.moveTo(mw + 100 + 5, mh - 5);
  ctx.lineTo(mw + 100 + 5, mh + 5);
  ctx.stroke();
  ctx.beginPath();
  let loadingValue = easeInOut((ts % 1000) / 1000);
  ctx.lineWidth = 3;
  ctx.strokeStyle =
    'rgba(255,255,255,' + easeInOut((ts - 2000) / 1000).toString() + ')';
  ctx.moveTo(
    mw -
      100 +
      (loadingValue < 0.5
        ? 150 * loadingValue
        : 150 * (0.5 - (loadingValue - 0.5))) *
        2,
    mh,
  );
  ctx.lineTo(
    mw -
      100 +
      (loadingValue < 0.5
        ? 200 * loadingValue
        : 200 * (0.5 - (loadingValue - 0.5))) *
        2,
    mh,
  );
  ctx.stroke();

  ctx.font = '32px serif';
  ctx.textAlign = 'center';
  ctx.fillStyle = 'rgba(255,255,255,' + easeInOut(ts / 2000).toString() + ')';
  ctx.fillText('涩妹妹小游戏', mw, mh + easeInOut(ts / 1000) * 32 - 96);
  // ctx.fillText(ts.toString(), mw, mh - 64);
  ctx.font = '18px serif';
  ctx.textAlign = 'center';
  ctx.fillStyle =
    'rgba(180,180,180,' + easeInOut((ts - 1000) / 2000).toString() + ')';
  ctx.fillText(
    opts.wasmLoaded
      ? opts.wasmVerify
        ? '等待渲染...'
        : '解析中...'
      : opts.wasmFailed
        ? 'WebAssembly 加载失败, 请刷新页面重试'
        : '正在下载游戏资源 ...',
    mw,
    mh - 18,
  );
  ctx.fillText('抵制不良游戏，拒绝盗版游戏。', mw, mh + 32);
  ctx.fillText('注意自我保护，谨防受骗上当。', mw, mh + 32 + 18);
  ctx.fillText('适度游戏益脑，沉迷游戏伤身。', mw, mh + 32 + 18 + 18);
  ctx.fillText('合理安排时间，享受健康生活。', mw, mh + 32 + 18 + 18 + 18);
}

function Canvas(
  props: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLCanvasElement> &
    React.CanvasHTMLAttributes<HTMLCanvasElement>,
) {
  // const { ...rest } = props;

  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [kernel, setKernel] = React.useState<InitOutput | null>(null);
  const [kernelLoadFailed, setKernelLoadFailed] = React.useState(false);
  const [kernelStarted, setKernelStarted] = React.useState(false);
  const globalTs = React.useRef(0);
  const mouseX = React.useRef(0);
  const mouseY = React.useRef(0);
  const mouseFloating = React.useRef(false);
  const mouseHolding = React.useRef(3);
  const [messageApi, contextHolder] = message.useMessage();
  let f = async () => {
    let r = await init(wasm);
    // await initThreadPool(navigator.hardwareConcurrency);
    return r;
  };

  React.useEffect(() => {
    f()
      .then((x) => {
        if (x != null) {
          setKernel(x);
          console.log('wasm load successfully~');
          // messageApi.info('WebAssembly 加载成功');
          setKernelLoadFailed(false);
        } else {
          console.error('wasm is null');
          messageApi.warning('WebAssembly 出现玄学问题');
          setKernelLoadFailed(true);
        }
      })
      .catch((x) => {
        console.error('wasm load failed:', x);
        messageApi.warning('WebAssembly 加载失败, 详情查看日志');
        setKernelLoadFailed(true);
      });
    return () => {};
  }, []);

  React.useEffect(() => {
    console.log('canvas redraw at', globalTs.current);
    var game: Game | undefined = undefined;
    var frame: Uint8Array | undefined = undefined;
    const canvas = canvasRef.current!;
    const context = canvas.getContext('2d');
    let animationFrameId = 0;
    let pingResult = (kernel ? ping() : null) == 'pong';
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (game) {
        game.resize(canvas.width, canvas.height);
      }
    };
    const render = (ts: number) => {
      if (globalTs.current == 0 && ts != 0) {
        globalTs.current = ts;
      }
      let relTs = ts - globalTs.current;
      if (pingResult && relTs > 2000) {
        if (game == undefined) {
          game = new Game(canvas.width, canvas.height);
        }
      }
      if (game && relTs > 3000) {
        game.mouse(
          mouseX.current,
          mouseY.current,
          mouseFloating.current,
          mouseHolding.current,
        );
        frame = game.flush(ts);
        !kernelStarted && setKernelStarted(true);
      }
      if (frame) {
        var im = new ImageData(
          new Uint8ClampedArray(frame.buffer),
          canvas.width,
          canvas.height,
        );
        context?.putImageData(im, 0, 0);
      } else {
        draw(context!, relTs, canvas.width, canvas.height, {
          wasmLoaded: pingResult,
          wasmFailed: kernelLoadFailed,
          wasmVerify: game != undefined,
        });
      }
      animationFrameId = window.requestAnimationFrame(render);
    };
    resize();
    render(0);
    window.addEventListener('resize', resize);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      game != undefined ? game.free() : null;
      console.log('canvas unload at', globalTs.current);
    };
  }, [kernel, kernelLoadFailed, kernelStarted]);

  React.useEffect(() => {
    if (kernelStarted) {
      messageApi.destroy();
      messageApi.success('WebAssembly 启动完成');
    }
  }, [kernelStarted]);

  return (
    <div>
      {contextHolder}
      <canvas
        ref={canvasRef}
        onContextMenu={(e) => {
          e.preventDefault();
        }}
        onMouseMove={(e) => {
          mouseX.current = e.clientX;
          mouseY.current = e.clientY;
        }}
        onMouseEnter={(e) => {
          mouseX.current = e.clientX;
          mouseY.current = e.clientY;
          mouseFloating.current = true;
        }}
        onMouseLeave={(_e) => {
          mouseFloating.current = false;
        }}
        onMouseDown={(e) => {
          mouseX.current = e.clientX;
          mouseY.current = e.clientY;
          switch (e.button) {
            case 0:
              mouseHolding.current = 0;
              break;
            case 1:
              mouseHolding.current = 2;
              break;
            case 2:
              mouseHolding.current = 1;
              break;
            default:
              mouseHolding.current = 2;
          }
        }}
        onMouseUp={(e) => {
          mouseX.current = e.clientX;
          mouseY.current = e.clientY;
          mouseHolding.current = 3;
        }}
        onTouchMove={(e) => {
          // e.touches.identifiedTouch()
        }}
        onTouchEnd={(e) => {}}
        onTouchStart={(e) => {}}
        onTouchCancel={(e) => {}}
        {...props}
      />
    </div>
  );
}
