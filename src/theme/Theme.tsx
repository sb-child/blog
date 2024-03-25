import { currentTheme } from '@/global';
import { ConfigProvider, theme } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import React from 'react';
const { darkAlgorithm } = theme;

function App(props: { children: React.ReactNode }) {
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
    colorPrimary: '#d98937',
    colorInfo: '#d98937',
    // borderRadius: 10,
    colorBgBase: '#f5f1d4',
    wireframe: false,
  };
  const token = currentTheme === 'normal' ? tokenNormal : tokenDeath;
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: token,
        algorithm: currentTheme === 'normal' ? [darkAlgorithm] : [],
      }}
      key="AntdConfig"
    >
      <div className={'_theme_root_ _theme_' + currentTheme}>
        {props.children}
      </div>
    </ConfigProvider>
  );
}

export default App;
