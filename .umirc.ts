import { defineConfig } from '@umijs/max';
import { theme } from 'antd';

export default defineConfig({
  antd: {
    configProvider:{
      theme:{
        algorithm: [
          theme.defaultAlgorithm,
          theme.compactAlgorithm
        ],
        token: {
          fontSize: 14,
          // "colorBgContainer": "rgba(209, 245, 228, 1)",
          // colorBgBase: "#f7ffe3"
        },
        components: {
          Table: {
            // colorBgContainer:'#1890FF',
            colorFillAlter: '#1890FF',//表头和Hover的颜色
            colorTextHeading: '#F0FFF0',//表头和Hover时字体的颜色
            colorPrimary: '#FFFF00',//筛选和漏斗的颜色
          }
        }
      }
    }
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
        name: ' CRUD 示例',
        path: '/table',
        component: './Table',
    },
  ],
  npmClient: 'yarn',
});

