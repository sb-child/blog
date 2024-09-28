import gpg1 from '@/assets/code/gpg-key1.txt';
import gpg2 from '@/assets/code/gpg-key2.txt';
import CodeView from '@/components/CodeView';
import Anim from '@/components/animated';
import { Typography } from 'antd';

/// title: 我的 GPG 公钥
/// desc:
/// hide
/// folder: docs/文档
/// tags: gpg
/// next: /
/// create: 2023-11-27 14:24:51
/// update: 2023-11-27 14:24:51

export default function Content(props: {}) {
  return (
    <Anim k="p_gpg">
      <Typography.Title level={2}>蜜药们</Typography.Title>
      <Typography.Title level={3}><code>sbchild-dypqbb &lt;sbchild0@gmail.com&gt;</code></Typography.Title>
      <Typography.Paragraph>注意: 这个密钥已经弃用</Typography.Paragraph>
      <Typography.Paragraph>
        公钥指纹: <code>6863E7D98934FE0A0CBB068F425069FB7AB05F70</code>
      </Typography.Paragraph>
      <Typography.Paragraph>
        <CodeView file={gpg1} language="plaintext" />
      </Typography.Paragraph>
      <Typography.Title level={3}><code>Neko Nya &lt;zinu5k7d1k2uzsxa@proton.me&gt;</code></Typography.Title>
      <Typography.Paragraph>
        公钥指纹: <code>ECE4517D9F092238F479454B8589052560C5FE24</code>
      </Typography.Paragraph>
      <Typography.Paragraph>
        <CodeView file={gpg2} language="plaintext" />
      </Typography.Paragraph>
    </Anim>
  );
}
