import Anim from '@/components/animated';
import {
  PostInfo,
  fetchPostsByCreateTime,
  fetchPostsByUpdateTime,
  getDev,
  toTimeStr,
} from '@/global';
import {
  AppstoreOutlined,
  CaretDownOutlined,
  CaretUpOutlined,
  ClockCircleOutlined,
  DownOutlined,
  EyeInvisibleOutlined,
  HistoryOutlined,
  TagsOutlined,
} from '@ant-design/icons';
import {
  Button,
  Card,
  Checkbox,
  Col,
  Divider,
  Dropdown,
  Grid,
  Row,
  Segmented,
  Space,
  Tag,
  Typography,
} from 'antd';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { useNavigate } from 'umi';

function PostCard(props: { post: PostInfo }) {
  const nav = useNavigate();
  return (
    <Anim _key={'articles-card-' + props.post.url + '-anim'}>
      <Card
        title={props.post.title}
        size="small"
        hoverable
        onClick={() => {
          nav(props.post.url);
        }}
      >
        <div>{props.post.desc}</div>
        <Space direction="vertical">
          <Tag color={'green'} icon={<ClockCircleOutlined />}>
            创建: {toTimeStr(props.post.createdAt)}
          </Tag>
          <Tag color={'cyan'} icon={<ClockCircleOutlined />}>
            更新: {toTimeStr(props.post.updatedAt)}
          </Tag>
        </Space>
        <div style={{ paddingTop: '8px' }}>
          <Tag color={'blue'} icon={<AppstoreOutlined />}>
            {props.post.folder ? props.post.folder : '未分类'}
          </Tag>
          {props.post.hide ? (
            <Tag color={'yellow'} icon={<EyeInvisibleOutlined />}>
              隐藏
            </Tag>
          ) : null}
          {props.post.tags.map((tag, index) => {
            return (
              <Tag
                color={'pink'}
                icon={<TagsOutlined />}
                key={'articles-card-' + props.post.url + '-' + index}
              >
                {tag}
              </Tag>
            );
          })}
        </div>
      </Card>
    </Anim>
  );
}

function WithTime(props: { type: 'create' | 'update'; hidden: boolean }) {
  const [order, setOrder] = React.useState<string | number>('down');
  const [results, setResults] = React.useState<{
    [key: string]: PostInfo[];
  }>();
  React.useEffect(() => {
    const fetched =
      props.type == 'create'
        ? fetchPostsByCreateTime(order as 'up' | 'down', !props.hidden)
        : fetchPostsByUpdateTime(order as 'up' | 'down', !props.hidden);
    setResults(fetched);
    return () => {};
  }, [order, props.type, props.hidden]);
  return (
    <div>
      <Segmented
        size="large"
        value={order}
        onChange={setOrder}
        options={[
          { label: '升序', icon: <CaretUpOutlined />, value: 'up' },
          { label: '降序', icon: <CaretDownOutlined />, value: 'down' },
        ]}
      />
      <div>
        {results ? (
          Object.keys(results).map((day) => (
            <div key={'articles-createtime-' + order + '-' + day}>
              <Divider orientation="left">
                {day == '1970-01-01' ? '未知' : day}
              </Divider>
              <Row gutter={[8, 8]}>
                {results[day].map((post) => (
                  <Col
                    xs={24}
                    sm={12}
                    md={12}
                    key={
                      'articles-createtime-' +
                      order +
                      '-' +
                      day +
                      '-' +
                      post.url
                    }
                  >
                    <AnimatePresence>
                      <PostCard post={post} />
                    </AnimatePresence>
                  </Col>
                ))}
              </Row>
            </div>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

function WithTags(props: {}) {
  return <div></div>;
}

function WithFolder(props: {}) {
  return <div></div>;
}

export default function ArticlesContent(props: {}) {
  const screens = Grid.useBreakpoint();
  const nav = useNavigate();
  const [selectedValue, setSelectedValue] = React.useState<string | number>(
    '0',
  );
  const [showHidden, setShowHidden] = React.useState(false);
  return (
    <Anim k="root-articles">
      <Typography.Title level={1}>文章列表</Typography.Title>
      {getDev() ? (
        <Checkbox
          checked={showHidden}
          onChange={(e) => {
            setShowHidden(e.target.checked);
          }}
        >
          显示隐藏文章
        </Checkbox>
      ) : null}
      <div style={{ display: screens.sm ? 'block' : 'none' }}>
        <Segmented
          size="large"
          // defaultValue={0}
          value={selectedValue}
          onChange={setSelectedValue}
          options={[
            { label: '按创建时间', icon: <ClockCircleOutlined />, value: '0' },
            { label: '按更新时间', icon: <HistoryOutlined />, value: '1' },
            { label: '按标签', icon: <TagsOutlined />, value: '2' },
            { label: '按分类', icon: <AppstoreOutlined />, value: '3' },
          ]}
        />
      </div>
      <div style={{ display: screens.sm ? 'none' : 'block' }}>
        <Dropdown
          menu={{
            onClick: (e) => {
              setSelectedValue(e.key);
            },
            items: [
              {
                label: '按创建时间',
                key: '0',
                icon: <ClockCircleOutlined />,
              },
              {
                label: '按更新时间',
                key: '1',
                icon: <HistoryOutlined />,
              },
              {
                label: '按标签',
                key: '2',
                icon: <TagsOutlined />,
              },
              {
                label: '按分类',
                key: '3',
                icon: <AppstoreOutlined />,
              },
            ],
          }}
        >
          <Button size="large">
            <Space>
              {selectedValue == '0'
                ? '按创建时间'
                : selectedValue == '1'
                  ? '按更新时间'
                  : selectedValue == '2'
                    ? '按标签'
                    : selectedValue == '3'
                      ? '按分类'
                      : null}
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </div>
      <div>
        <br />
        {selectedValue == '0' ? (
          <WithTime type="create" hidden={showHidden} />
        ) : selectedValue == '1' ? (
          <WithTime type="update" hidden={showHidden} />
        ) : selectedValue == '2' ? (
          <WithTags />
        ) : selectedValue == '3' ? (
          <WithFolder />
        ) : null}
      </div>
      <Divider />
      {/* <Typography.Paragraph>
        有新的 idea, 意见或建议?
        <blockquote>找个联系方式, 私聊咱~</blockquote>
      </Typography.Paragraph> */}
    </Anim>
  );
}
