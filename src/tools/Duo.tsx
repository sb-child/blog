import { ReactComponent as TelegramIcon } from '@/assets/icons/telegram.svg';
import Anim from '@/components/animated';
import { copyToClipboard } from '@/utils/clipboard';
import Icon, {
  DownloadOutlined,
  FireOutlined,
  LinkOutlined,
} from '@ant-design/icons';
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Row,
  Select,
  Space,
  Typography,
} from 'antd';
import { Base64 } from 'js-base64';
import React from 'react';

export default function Duo() {
  const [form] = Form.useForm();
  const defaultLink = 'https://sbchild.top/omd/_';
  const urlBase = 'https://sbchild.top/omd/b/';
  const tgInlineBase = '@sbchild_bot |||';

  const [imgLink, setImgLink] = React.useState(defaultLink);
  const [imgTgLink, setImgTgLink] = React.useState(tgInlineBase);

  const [imgLinkCopied, setimgLinkCopied] = React.useState(0);
  const [imgTgLinkCopied, setimgTgLinkCopied] = React.useState(0);
  React.useEffect(() => {
    var t: NodeJS.Timeout | undefined;
    if (imgLinkCopied != 0) {
      t = setTimeout(() => {
        setimgLinkCopied(0);
      }, 1000);
    }
    return () => {
      if (t) {
        clearTimeout(t);
      }
    };
  }, [imgLinkCopied]);
  React.useEffect(() => {
    var t: NodeJS.Timeout | undefined;
    if (imgTgLinkCopied != 0) {
      t = setTimeout(() => {
        setimgTgLinkCopied(0);
      }, 1000);
    }
    return () => {
      if (t) {
        clearTimeout(t);
      }
    };
  }, [imgTgLinkCopied]);

  const onFormSubmit = () => {
    form.validateFields().then(
      () => {
        var opts = {
          r: false,
          c: Number(form.getFieldValue('character')),
          l: 0,
          o: String(form.getFieldValue('origin')),
          t: String(form.getFieldValue('translated')),
          j: false,
        };
        var optStr = Base64.encodeURI(JSON.stringify(opts));
        opts.j = true;
        var optTgStr = Base64.encodeURI(JSON.stringify(opts));
        setImgLink(urlBase + optStr);
        setImgTgLink(tgInlineBase + optTgStr);
      },
      () => {},
    );
  };
  const onImgDownload = () => {
    var link = document.createElement('a');
    link.download = '';
    link.href = imgLink;
    link.click();
  };
  return (
    <Anim k="tools_duo">
      <Typography.Title level={1}>Oh My Duo</Typography.Title>
      <Typography.Title level={2}>
        快快生成你的专属 Duolingo 贴纸喵
      </Typography.Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Card
            cover={<img alt={'omd-preview'} src={imgLink} />}
            bodyStyle={{ textAlign: 'end' }}
          >
            <Space wrap>
              <Button
                type="primary"
                icon={<DownloadOutlined />}
                // onClick={onImgDownload}
                // download
                // href={imgLink}
              >
                下载(坏掉啦,还请右键图片下载)
              </Button>
              <Button
                icon={<LinkOutlined />}
                onClick={() => {
                  copyToClipboard(
                    imgLink,
                    () => setimgLinkCopied(1), // success
                    () => setimgLinkCopied(2), // error
                  );
                }}
              >
                {imgLinkCopied == 0
                  ? '复制图片链接'
                  : imgLinkCopied == 1
                    ? '已复制'
                    : '复制失败'}
              </Button>
              <Button
                icon={<Icon component={TelegramIcon} />}
                onClick={() => {
                  copyToClipboard(
                    imgTgLink,
                    () => setimgTgLinkCopied(1), // success
                    () => setimgTgLinkCopied(2), // error
                  );
                }}
              >
                {imgTgLinkCopied == 0
                  ? '复制 TG Inline'
                  : imgTgLinkCopied == 1
                    ? '已复制'
                    : '复制失败'}
              </Button>
            </Space>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Card>
            <Form form={form}>
              <Form.Item
                name="origin"
                label="原文"
                rules={[{ required: true }]}
              >
                <Input placeholder="Hello!" allowClear />
              </Form.Item>
              <Form.Item
                name="translated"
                label="译文"
                rules={[{ required: true }]}
              >
                <Input placeholder="你好！" allowClear />
              </Form.Item>
              <Form.Item
                name="character"
                label="角色"
                rules={[{ required: true }]}
              >
                <Select
                  placeholder="选择角色"
                  // onChange={onGenderChange}
                  allowClear
                >
                  <Select.Option value="0">Duo (多儿)</Select.Option>
                  <Select.Option value="1">Bea (小贝)</Select.Option>
                  <Select.Option value="2">Vikram (维克拉姆)</Select.Option>
                  <Select.Option value="3">Oscar (奥斯卡)</Select.Option>
                  <Select.Option value="4">Junior (朱朱)</Select.Option>
                  <Select.Option value="5">Eddy (艾迪)</Select.Option>
                  <Select.Option value="6">Zari (沙丽)</Select.Option>
                  <Select.Option value="7">Lily (莉莉)</Select.Option>
                  <Select.Option value="8">Lin (阿琳)</Select.Option>
                  <Select.Option value="9">Lucy (露西)</Select.Option>
                  <Select.Option value="10">Falstaff</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  onClick={onFormSubmit}
                  icon={<FireOutlined />}
                >
                  生成
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
      <br />
    </Anim>
  );
}
