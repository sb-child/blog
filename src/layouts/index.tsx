import ccbysaImage from '@/assets/images/ccbysa-big.png';
import siteLogo from '@/assets/images/site-logo.png';
import { PostInfo, findPost, getBuildTime, toTimeStr } from '@/global';
import Theme from '@/theme/Theme';
import {
  AppstoreOutlined,
  ClockCircleOutlined,
  EyeInvisibleOutlined,
  FieldTimeOutlined,
  RightOutlined,
  TagsOutlined,
} from '@ant-design/icons';
import { App, Button, Menu, Space, Tag, Typography } from 'antd';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'umi';
import styles from './index.less';

const Inner = (props: {}) => {
  const loc = useLocation();
  const nav = useNavigate();
  const [post, setPost] = React.useState<PostInfo | undefined>();
  const [contentKey, setContentKey] = React.useState<string>(
    'content_key_' + loc.pathname,
  );
  const nextPost = post ? findPost(post.nextUrl) : undefined;
  const showTitle = post && post.folder !== 'layout';
  React.useEffect(() => {
    setPost(findPost(loc.pathname));
    setContentKey('content_key_' + loc.pathname);
    window.scrollTo({ left: 0, top: 0, behavior: 'auto' });
    return () => {};
  }, [loc]);

  // postRoutes
  return (
    <div className={styles.root}>
      <motion.div className={styles.headerBlock}>
        <div className={styles.headerWrapper}>
          <Link to="/" className="__no_hover_border__">
            <div className={styles.headerSite}>
              <img
                src={siteLogo}
                alt="site logo"
                className={styles.headerSitelogo}
              />
              <div className={styles.headerSitename}>色妹妹的船新博客!</div>
            </div>
          </Link>

          <div style={{}}>
            <Menu
              hidden
              disabledOverflow={true}
              style={{ height: '100%', borderBottomWidth: '0px' }}
              onClick={() => {}}
              selectedKeys={['0']}
              mode="horizontal"
              items={[
                {
                  label: '喵',
                  key: '0',
                  // icon: <MailOutlined />,
                },
                {
                  label: '喵呜',
                  key: '1',
                  // icon: <MailOutlined />,
                },
              ]}
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        animate={{
          userSelect: showTitle ? 'auto' : 'none',
        }}
      >
        <motion.div
          className={styles.titleBlock}
          animate={{
            height: showTitle ? '100%' : '0px',
            opacity: showTitle ? 1 : 0,
            y: showTitle ? 0 : -90,
          }}
        >
          <Typography>
            <Typography.Title className={styles.titleName}>
              {post?.title}
            </Typography.Title>
            <Typography.Text className={styles.titleSecondary} type="secondary">
              {post?.desc}
            </Typography.Text>
          </Typography>
        </motion.div>
        <motion.div
          className={styles.descBlock}
          animate={{
            height: showTitle ? '100%' : '0px',
            opacity: showTitle ? 1 : 0,
            y: showTitle ? 0 : -90,
          }}
        >
          <div className={styles.titleTagsBox}>
            <div className={styles.titleTags}>
              <Tag color={'green'} icon={<ClockCircleOutlined />}>
                创建: {toTimeStr(post ? post.createdAt : 0)}
              </Tag>
              <Tag color={'cyan'} icon={<FieldTimeOutlined />}>
                更新: {toTimeStr(post ? post.updatedAt : 0)}
              </Tag>
              <Tag color={'blue'} icon={<AppstoreOutlined />}>
                {post?.folder ? post?.folder : '未分类'}
              </Tag>
              {post?.hide ? (
                <Tag color={'yellow'} icon={<EyeInvisibleOutlined />}>
                  隐藏
                </Tag>
              ) : null}
              {post?.tags.map((v, k, _2) => {
                return (
                  <Tag
                    color={'pink'}
                    icon={<TagsOutlined />}
                    key={'index-header-tag-' + k}
                  >
                    {v}
                  </Tag>
                );
              })}
            </div>
          </div>
        </motion.div>
      </motion.div>
      <motion.div layout="size">
        <motion.div
          layout="preserve-aspect"
          className={styles.postBlock}
          animate={{ height: '100%' }}
          // transition={{ ease: 'linear', duration: 5 }}
        >
          <Typography className={styles.postText}>
            <AnimatePresence mode="wait">
              <Outlet />
              {/* <motion.div key={contentKey}>
              <Outlet />
            </motion.div> */}
            </AnimatePresence>
          </Typography>
        </motion.div>
        <div className={styles.postBlockBottom}></div>
      </motion.div>
      <motion.div layout="preserve-aspect" className={styles.suggestBlock}>
        <motion.div
          layout
          className={styles.suggestPager}
          animate={{
            opacity: nextPost ? 1 : 0,
            x: nextPost ? 0 : 50,
            height: nextPost ? '100%' : '0px',
          }}
        >
          {/* <a className={styles.suggestPagerPrev}>
            <LeftOutlined />
            上一篇文章
          </a> */}

          <Link
            to={nextPost ? (post ? post.nextUrl + '#' : '/') : '/'}
            className={styles.suggestPagerNext}
          >
            <div className={styles.suggestPagerTitle}>
              {nextPost?.title}
              <RightOutlined />
            </div>
            <div>
              <Tag color={'blue'} icon={<AppstoreOutlined />}>
                {nextPost?.folder ? nextPost.folder : '未分类'}
              </Tag>
            </div>
          </Link>
        </motion.div>
        <div className={styles.suggestLatest}>
          <Space direction="vertical" size={4}>
            <div>猜你喜欢</div>
            <Button type="text" onClick={() => nav('/friends')}>
              涩妹妹和涩妹妹的朋友们
            </Button>
            {/* <Button type="text">不知道...</Button>
            <Button type="text">也不知道!~</Button> */}
          </Space>
        </div>
      </motion.div>
      <motion.div layout="position" className={styles.footerBlock}>
        <div className={styles.footerCopyright}>
          <Space>
            Copyright 2022 - 2024
            <a href="https://github.com/sb-child">sbchild</a>
            <a href="https://github.com/sb-child/blog">源代码</a>
            <a
              href="https://icp.gov.moe/?keyword=20241989"
              target="_blank"
              rel="noreferrer"
            >
              萌ICP备20241989号
            </a>
          </Space>

          <div>{' 构建时间: ' + getBuildTime()}</div>
        </div>
        <div className={styles.footerLicense}>
          <a
            rel="license"
            href="http://creativecommons.org/licenses/by-sa/4.0/"
          >
            <img alt="知识共享许可协议" src={ccbysaImage} />
          </a>
          <br />
          本作品采用
          <a
            rel="license"
            href="http://creativecommons.org/licenses/by-sa/4.0/"
            className="__no_hover_border__"
          >
            知识共享署名-相同方式共享 4.0 国际许可协议
          </a>
          进行许可。
        </div>
      </motion.div>
    </div>
  );
};

export default function Layout() {
  return (
    <React.StrictMode>
      <App>
        <Theme key="ThemeWrapper">
          <Inner />
        </Theme>
      </App>
    </React.StrictMode>
  );
}
