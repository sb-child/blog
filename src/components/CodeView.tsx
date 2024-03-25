import codiconCss from '@/assets/icons/codicon.css';
import { ReactComponent as PrismLogo } from '@/assets/icons/prism.svg';
import { countLines } from '@/utils/re';
import Editor, { loader, useMonaco } from '@monaco-editor/react';
import { Space, Tabs } from 'antd';
import * as monaco from 'monaco-editor';
import Prism from 'prismjs';
import React from 'react';
import style from './codeview.less';
import EditorTheme from './editor-theme-converted.json';
loader.config({
  monaco,
});
Prism.manual = true;

function PrismView(props: { content: string; language: string }) {
  const prismElem = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (prismElem.current) {
      Prism.highlightElement(prismElem.current, false);
    }
    return () => {};
  }, [props.content, props.language]);
  return (
    <div
      style={{ minHeight: '200px', maxHeight: '500px', overflow: 'auto' }}
      className="comp-codeview"
    >
      <pre className={'line-numbers language-' + props.language}>
        <code
          ref={prismElem}
          className={'language-' + props.language}
          style={{ display: 'block' }}
        >
          {props.content + '\n'}
        </code>
      </pre>
    </div>
  );
}

function CodeView(props: {
  file: string;
  language: { prism: string; monaco: string } | string;
}) {
  const [content, setContent] = React.useState('正在加载代码...');
  const [prismCode, setPrismCode] = React.useState('正在加载代码...');
  const [prismLang, setPrismLang] = React.useState('markdown');
  const [monacoHeight, setMonacoHeight] = React.useState(200);
  const monaco = useMonaco();
  React.useEffect(() => {
    if (monaco) {
      monaco.editor.defineTheme(
        'ghdark-default',
        EditorTheme as monaco.editor.IStandaloneThemeData,
      );
    }
  }, [monaco]);
  React.useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(props.file)
        .then((v) => v.text())
        .finally()
        .catch((error) => {
          console.error('Error fetching resource:', error);
          setContent('代码拉取失败: ' + error);
        });
      if (data) {
        setContent(data);
      }
    };
    fetchData();
  }, [props.file]);
  React.useEffect(() => {
    const lines = countLines(content);
    const h = lines * 19 + 10;
    setMonacoHeight(h > 500 ? 500 : h > 200 ? h : 200);
    return () => {};
  }, [content, props.language]);
  React.useEffect(() => {
    setPrismLang(
      typeof props.language == 'string' ? props.language : props.language.prism,
    );
    return () => {};
  }, [props.language]);

  const monacoItem = () => {
    return (
      <Editor
        defaultValue={content}
        value={content}
        height={monacoHeight}
        theme="ghdark-default"
        language={
          typeof props.language == 'string'
            ? props.language
            : props.language.monaco
        }
        options={{
          readOnly: true,
          smoothScrolling: true,
          cursorSmoothCaretAnimation: 'on',
        }}
      />
    );
  };

  return (
    <div className={style.editorBorder}>
      <Tabs
        defaultActiveKey="0"
        centered
        items={[
          {
            label: (
              <Space align="center" size={2}>
                <PrismLogo style={{ height: '16px' }} />
                <span>Prism</span>
              </Space>
            ),
            key: '0',
            children: <PrismView content={content} language={prismLang} />,
          },
          {
            label: (
              <Space align="center" size={2}>
                <span
                  className={
                    codiconCss.codicon + ' ' + codiconCss['codicon-project']
                  }
                />
                <span>Monaco</span>
              </Space>
            ),
            key: '1',
            children: monacoItem(),
          },
        ]}
      />
    </div>
  );
}

export default CodeView;
