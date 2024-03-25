import imgStep1 from '@/assets/images/tools/bra-s1.png';
import imgStep2 from '@/assets/images/tools/bra-s2.png';
import imgStep3 from '@/assets/images/tools/bra-s3.png';
import imgStep4 from '@/assets/images/tools/bra-s4.png';
import {
  HeartOutlined,
  HomeOutlined,
  QuestionOutlined,
  ToolOutlined,
} from '@ant-design/icons';
import {
  Button,
  Card,
  Carousel,
  Col,
  Divider,
  Image,
  InputNumber,
  Row,
  Space,
  Typography,
} from 'antd';
import React from 'react';
// import MainCss from '../MainCss.json';
import Anim from '@/components/animated';
import { CarouselRef } from 'antd/es/carousel';
import { useNavigate } from 'react-router-dom';

function ToolCard(props: {
  title: string;
  desc: string;
  background: string;
  onClick: () => void;
}) {
  return (
    <Col xs={24} sm={12} md={6}>
      <Card
        cover={<img alt={props.title} src={props.background} />}
        // className={MainCss.BgColorBgLayout}
        actions={[
          <Button
            icon={<ToolOutlined />}
            onClick={() => {
              props.onClick();
            }}
          >
            打开
          </Button>,
        ]}
      >
        <Card.Meta title={props.title} description={props.desc} />
      </Card>
    </Col>
  );
}

function Step0(props: { onSubmit: () => void }) {
  return (
    <Card title="0. 请准备一根软尺并面对镜子，看得到胸部">
      <Image src={imgStep1} />
      <Divider />
      <Button
        type="primary"
        icon={<HeartOutlined />}
        style={{ float: 'right' }}
        onClick={() => props.onSubmit()}
      >
        然后捏
      </Button>
    </Card>
  );
}

function Step1(props: { onBack: () => void; onSubmit: (v: number) => void }) {
  const [val, setVal] = React.useState<string | number | null>(1.0);
  return (
    <Card title="1. 请直立，放松，用软尺贴合乳房下缘，水平绕身体一量圈">
      <div>像这样:</div>
      <Image src={imgStep2} />
      <Divider />
      <Space>
        看看有多长喵
        <InputNumber
          min={1}
          addonAfter="cm"
          defaultValue={1}
          value={val}
          onChange={setVal}
        />
      </Space>
      <Divider />
      <Button icon={<QuestionOutlined />} onClick={() => props.onBack()}>
        看看上一步
      </Button>
      <Button
        type="primary"
        icon={<HeartOutlined />}
        style={{ float: 'right' }}
        onClick={() => props.onSubmit(Number(val))}
      >
        然后捏
      </Button>
    </Card>
  );
}

function Step2(props: { onBack: () => void; onSubmit: (v: number) => void }) {
  const [val, setVal] = React.useState<string | number | null>(1.0);
  return (
    <Card title="2. 请呼气">
      <Space>
        看看有多长喵
        <InputNumber
          min={1}
          addonAfter="cm"
          defaultValue={1}
          value={val}
          onChange={setVal}
        />
      </Space>
      <Divider />
      <Button icon={<QuestionOutlined />} onClick={() => props.onBack()}>
        看看上一步
      </Button>
      <Button
        type="primary"
        icon={<HeartOutlined />}
        style={{ float: 'right' }}
        onClick={() => props.onSubmit(Number(val))}
      >
        然后捏
      </Button>
    </Card>
  );
}

function Step3(props: { onBack: () => void; onSubmit: (v: number) => void }) {
  const [val, setVal] = React.useState<string | number | null>(1.0);
  return (
    <Card title="3. 请直立，放松，用软尺经过乳头，绕身体一量圈">
      <div>像这样:</div>
      <Image src={imgStep3} />
      <Divider />
      <Space>
        看看有多长喵
        <InputNumber
          min={1}
          addonAfter="cm"
          defaultValue={1}
          value={val}
          onChange={setVal}
        />
      </Space>
      <Divider />
      <Button icon={<QuestionOutlined />} onClick={() => props.onBack()}>
        看看上一步
      </Button>
      <Button
        type="primary"
        icon={<HeartOutlined />}
        style={{ float: 'right' }}
        onClick={() => props.onSubmit(Number(val))}
      >
        然后捏
      </Button>
    </Card>
  );
}

function Step4(props: { onBack: () => void; onSubmit: (v: number) => void }) {
  const [val, setVal] = React.useState<string | number | null>(1.0);
  return (
    <Card title="4. 请俯身 45 度">
      <div>像这样:</div>
      <Image src={imgStep4} />
      <Divider />
      <Space>
        看看有多长喵
        <InputNumber
          min={1}
          addonAfter="cm"
          defaultValue={1}
          value={val}
          onChange={setVal}
        />
      </Space>
      <Divider />
      <Button icon={<QuestionOutlined />} onClick={() => props.onBack()}>
        看看上一步
      </Button>
      <Button
        type="primary"
        icon={<HeartOutlined />}
        style={{ float: 'right' }}
        onClick={() => props.onSubmit(Number(val))}
      >
        然后捏
      </Button>
    </Card>
  );
}

function Content(props: {}) {
  const nav = useNavigate();
  const stepsRef = React.createRef<CarouselRef>();
  return (
    <Anim k="tools_bra" className="__content__">
      <Typography.Title level={3}>按要求输入数值即可计算罩杯</Typography.Title>
      <Row gutter={[8, 8]} justify="center">
        <Col xs={24} sm={18} md={18}>
          <Carousel ref={stepsRef}>
            <Step0 onSubmit={() => stepsRef.current?.goTo(1)} />
            <Step1
              onBack={() => stepsRef.current?.goTo(0)}
              onSubmit={(x) => stepsRef.current?.goTo(2)}
            />
            <Step2
              onBack={() => stepsRef.current?.goTo(1)}
              onSubmit={(x) => stepsRef.current?.goTo(3)}
            />
            <Step3
              onBack={() => stepsRef.current?.goTo(2)}
              onSubmit={(x) => stepsRef.current?.goTo(4)}
            />
            <Step4
              onBack={() => stepsRef.current?.goTo(3)}
              onSubmit={(x) => stepsRef.current?.goTo(0)}
            />
          </Carousel>
        </Col>
      </Row>

      <Space direction="vertical">
        <div>0. 请准备一根软尺并面对镜子，看得到胸部</div>
        <div>1. 请直立，放松，用软尺贴合乳房下缘，水平绕身体一量圈：</div>
        <div>2. 请呼气：</div>
        <div>3. 请直立，放松，用软尺经过乳头，绕身体一量圈：</div>
        <div>4. 请俯身 45 度：</div>
        <div>5. 请鞠躬 90 度：</div>
      </Space>
      <Divider />
      <Button icon={<HomeOutlined />} onClick={() => nav('/tools')}>
        返回工具列表
      </Button>
      <Divider />
    </Anim>
  );
}

export default Content;
