import { ConfigProvider, theme } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import React from 'react';
const { darkAlgorithm, defaultAlgorithm } = theme;

function App(props: { children: React.ReactNode; theme: 'normal' | 'death' }) {
  const tokenNormal = {
    colorPrimary: '#539bf5',
    colorInfo: '#9fbadc',
    colorPrimaryBg: '#22252e',
    wireframe: false,
    colorInfoBorder: '#444a56',
    colorBgLayout: '#1c1f28',
    colorBgContainer: '#22252e',
    colorBgElevated: '#2d333b',
    colorBorder: '#343c4c',
    colorBorderSecondary: '#444a56',
    colorPrimaryBorder: '#2568b9',
    colorPrimaryBorderHover: '#3981da',
  };
  const tokenDeath = {
    colorPrimary: '#dc823c',
    colorInfo: '#dc823c',
    colorTextBase: '#232323',
    colorBgBase: '#f5e9dc',
    wireframe: false,
  };
  const token = props.theme === 'normal' ? tokenNormal : tokenDeath;
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: token,
        algorithm:
          props.theme === 'normal' ? [darkAlgorithm] : [defaultAlgorithm],
      }}
      key="AntdConfig"
    >
      <div className={'_theme_root_ _theme_' + props.theme}>
        {props.children}
      </div>
    </ConfigProvider>
  );
}

export default App;
