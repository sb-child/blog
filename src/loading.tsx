import React from 'react';
import Anim from './components/animated';
import styles from './loading.less';

export const LoadingPage = () => {
  // source: src/plugins/inj.js
  const randTitle: string = (window as any)._getRandomLoadTitle();
  const [showTip, setShowTip] = React.useState(false);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowTip(true);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <Anim k="loading">
      <div className={styles.load_background}>
        <div className={styles.load_background_inner}>
          <div className={styles.load_animation_warp}>
            <div className={styles.load_animation}></div>
            <div className={styles.load_anim_edge1}></div>
            <div className={styles.load_anim_edge2}></div>
            <div className={styles.load_anim_edge3}></div>
            <div className={styles.load_anim_edge4}></div>
            <div className={styles.load_anim_point1}></div>
            <div className={styles.load_anim_point2}></div>
            <div className={styles.load_anim_point3}></div>
            <div className={styles.load_anim_point4}></div>
          </div>
          {showTip ? (
            <div>
              <span>加载了太长时间?</span>
              <button
                className={styles.button}
                onClick={() => {
                  location.reload();
                }}
              >
                刷新页面
              </button>
              <span>试试</span>
            </div>
          ) : (
            <div>{randTitle}</div>
          )}
        </div>
      </div>
    </Anim>
  );
};

export default LoadingPage;
