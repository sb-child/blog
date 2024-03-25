import Anim from '@/components/animated';
import { ToolOutlined } from '@ant-design/icons';
import { Button, Card, Col, Divider, Row, Typography } from 'antd';
import { motion } from 'framer-motion';
// import MainCss from '../MainCss.json';
import { useNavigate } from 'umi';

function ToolCard(props: {
  title: string;
  desc: string;
  background: string;
  onClick: () => void;
}) {
  return (
    <Col xs={24} sm={12} md={6}>
      <Card
        cover={<motion.img layout alt={props.title} src={props.background} />}
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

export default function ToolsContent(props: {}) {
  const nav = useNavigate();
  return (
    <Anim k="root-tools">
      <Typography.Title level={1}>色妹妹的神奇工具</Typography.Title>
      <Typography.Title level={2}>又不要钱，快来试用吧</Typography.Title>
      <Row gutter={[8, 8]}>
        <ToolCard
          title="Duolingo 贴纸生成器"
          background={'https://sbchild.top/omd/_'}
          desc="https://github.com/sb-child/OhMyDuo"
          onClick={() => nav('/tools/duo')}
        />
        {/* <ToolCard
          title="罩杯计算器"
          background={imgSoftRuler}
          desc="从 MtF.wiki 那边抄的, 但是选内衣必备"
          onClick={() => nav('/bra')}
        /> */}
        {/* <ToolCard
          title="激素单位换算"
          background={imgMedicine}
          desc="从 MtF.wiki 那边抄的, 但是 DIY HRT 必备"
          onClick={() => nav('/bra')}
        />
        <ToolCard
          title="您Pass嘛"
          background={imgPerson}
          desc="(在计划做啦)可能会帮您缓解一些不必要的外貌焦虑"
          onClick={() => {}}
        /> */}
        {/* <ToolCard
          title="starmoe's site"
          background={imgStarmoe}
          desc="「生亦何苦，死亦何哀」"
          link="https://hexo.hydi.xyz/"
        />
        <ToolCard
          title="Sharelter"
          background={imgSharelter}
          desc="喜欢喵喵的可爱大姐姐的blog哦"
          link="https://sharelter.github.io/"
        /> */}
      </Row>
      <Divider />
      <Typography.Paragraph>
        有新的 idea, 意见或建议?
        <blockquote>找个联系方式, 私聊咱~</blockquote>
      </Typography.Paragraph>
    </Anim>
  );
}
