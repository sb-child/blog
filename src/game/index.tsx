// import codeSample from '@/assets/code/code-sample.txt';
// import imgSample from '@/assets/images/posts/img-sample.png';
import Anim from '@/components/animated';
import { Button, Typography, message } from 'antd';
import React from 'react';
import styles from './index.less';
// import Main from './main';

export default function Content(props: {}) {
  const [messageApi, contextHolder] = message.useMessage();
  const [gameStarted, setGameStarted] = React.useState(false);
  const onStartGame = () => {
    messageApi.success('已进入游戏');
    setGameStarted(true);
  };
  return (
    <Anim k="root-game">
      {contextHolder}
      <Typography.Title level={2}>todo</Typography.Title>
      <Typography.Paragraph>
        <Button onClick={onStartGame}>敬请期待</Button>
      </Typography.Paragraph>
      {/* {gameStarted && (
        <div className={styles.game_container}>
          <Main />
        </div>
      )} */}
    </Anim>
  );
}
