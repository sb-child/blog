import { ReactComponent as OauLogo } from '@/assets/icons/oau.svg';
import { ReactComponent as TelegramLogo } from '@/assets/icons/telegram.svg';
import ImgCatMatrix from '@/assets/images/death/cat_matrix.jpg';
import ImgStarmoe from '@/assets/images/death/starmoe.jpg';
import Anim from '@/components/animated';
import Icon, { GithubOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, Divider, Row, Typography, Watermark } from 'antd';
import React from 'react';

function LinkTitle(props: {
  icon: React.ReactNode;
  title: string;
  target?: string;
}) {
  return props.target ? (
    <a href={props.target} target="_blank" rel="noreferrer">
      <Typography.Paragraph underline>
        {props.icon} {props.title}
      </Typography.Paragraph>
    </a>
  ) : null;
}

function DeathCard(props: {
  title: string;
  desc: string;
  deathDate?: string | false;
  avatar: string;
  githubLink?: string;
  tgLink?: string;
  oauLink?: string | false; // one-among.us
  extra?: React.ReactNode;
}) {
  return (
    <Col xs={24} sm={24} md={12}>
      <Watermark
        content={props.deathDate === false ? ['尚未升天', '敬请期待'] : []}
      >
        <Card hoverable>
          <Card.Meta
            avatar={<Avatar src={props.avatar} size={50} />}
            title={props.title}
            description={
              <div>
                {props.deathDate === false ? (
                  <div>尚未升天, 敬请期待</div>
                ) : (
                  <div>
                    升天日期: {props.deathDate ? props.deathDate : '已失传'}
                  </div>
                )}
              </div>
            }
          />
          <Divider orientation="left">生平经历</Divider>
          <div>{props.desc}</div>
          <Divider orientation="left">天堂电话</Divider>
          <LinkTitle
            icon={<Icon component={TelegramLogo} />}
            title="Telegram"
            target={props.tgLink}
          />
          <LinkTitle
            icon={<GithubOutlined />}
            title="GitHub"
            target={props.githubLink}
          />
          <LinkTitle
            icon={<Icon component={OauLogo} viewBox="0 0 593.33 604" />}
            title={
              'One Among Us' + (props.oauLink === false ? ' (敬请期待)' : '')
            }
            target={props.oauLink === false ? '.' : props.oauLink}
          />
          {props.extra ? <div>{props.extra}</div> : <div />}
        </Card>
      </Watermark>
    </Col>
  );
}

export default function DeathContent(props: {}) {
  return (
    <Anim k="root-death" className="__content__">
      <Typography.Title>色天堂</Typography.Title>
      <Typography.Paragraph>
        在这个庄重, 涩涩且自由的环境里, ta 们在另一个维度,
        过着自己渴望的幸福生活。
      </Typography.Paragraph>
      <Divider orientation="left">小可爱们</Divider>
      <Row gutter={[8, 8]}>
        <DeathCard
          title="残念(starmoe)"
          desc="真的很可爱而且喜欢 meow 的大姐姐...可惜复活赛打输了。"
          deathDate="2023.11.26"
          avatar={ImgStarmoe}
          githubLink="https://github.com/Bro-Xun"
          tgLink="https://t.me/meow_starmoe"
        />
        <DeathCard
          title="猫猫(CatMatrix)"
          desc={'"一个失败的 MtF"? 和艾伦·图灵相似的死法。'}
          deathDate={false}
          avatar={ImgCatMatrix}
          githubLink="https://github.com/Butyllithium"
          tgLink="https://t.me/CatMatrix_QAQ"
          oauLink={false}
        />
      </Row>
      <Divider />
      <Typography.Paragraph>天堂虽好, 但可不要贪杯哦~</Typography.Paragraph>
      <Typography.Paragraph>一起活下去喵, 抱住~</Typography.Paragraph>
      <Typography.Paragraph>
        服主一定不会出现在这里的<sub>(小声)</sub>
      </Typography.Paragraph>
    </Anim>
  );
}
