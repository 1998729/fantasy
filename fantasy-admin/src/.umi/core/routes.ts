// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/yuzongyang/kuaishou/project/fantasy/fantasy-admin/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';
import LoadingComponent from '@ant-design/pro-layout/es/PageLoading';

export function getRoutes() {
  const routes = [
  {
    "path": "/umi/plugin/openapi",
    "component": dynamic({ loader: () => import(/* webpackChunkName: '.umi__plugin-openapi__openapi' */'/Users/yuzongyang/kuaishou/project/fantasy/fantasy-admin/src/.umi/plugin-openapi/openapi.tsx'), loading: LoadingComponent})
  },
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: '.umi__plugin-layout__Layout' */'/Users/yuzongyang/kuaishou/project/fantasy/fantasy-admin/src/.umi/plugin-layout/Layout.tsx'), loading: LoadingComponent}),
    "routes": [
      {
        "path": "/~demos/:uuid",
        "layout": false,
        "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout'), loading: LoadingComponent})],
        "component": ((props) => dynamic({
          loader: async () => {
            const React = await import('react');
            const { default: getDemoRenderArgs } = await import(/* webpackChunkName: 'dumi_demos' */ '/Users/yuzongyang/kuaishou/project/fantasy/fantasy-admin/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
            const { default: Previewer } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi-theme-default/es/builtins/Previewer.js');
            const { usePrefersColor, context } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi/theme');

            return props => {
              
      const { demos } = React.useContext(context);
      const [renderArgs, setRenderArgs] = React.useState([]);

      // update render args when props changed
      React.useLayoutEffect(() => {
        setRenderArgs(getDemoRenderArgs(props, demos));
      }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
            }
          },
          loading: () => null,
        }))()
      },
      {
        "path": "/_demos/:uuid",
        "redirect": "/~demos/:uuid"
      },
      {
        "__dumiRoot": true,
        "layout": false,
        "path": "/~docs",
        "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout'), loading: LoadingComponent}), dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'/Users/yuzongyang/kuaishou/project/fantasy/fantasy-admin/node_modules/dumi-theme-default/es/layout.js'), loading: LoadingComponent})],
        "routes": [
          {
            "path": "/~docs",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'README.md' */'/Users/yuzongyang/kuaishou/project/fantasy/fantasy-admin/README.md'), loading: LoadingComponent}),
            "exact": true,
            "meta": {
              "locale": "en-US",
              "order": null,
              "filePath": "README.md",
              "updatedTime": 1644215341000,
              "slugs": [
                {
                  "depth": 1,
                  "value": "Ant Design Pro",
                  "heading": "ant-design-pro"
                },
                {
                  "depth": 2,
                  "value": "Environment Prepare",
                  "heading": "environment-prepare"
                },
                {
                  "depth": 2,
                  "value": "Provided Scripts",
                  "heading": "provided-scripts"
                },
                {
                  "depth": 3,
                  "value": "Start project",
                  "heading": "start-project"
                },
                {
                  "depth": 3,
                  "value": "Build project",
                  "heading": "build-project"
                },
                {
                  "depth": 3,
                  "value": "Check code style",
                  "heading": "check-code-style"
                },
                {
                  "depth": 3,
                  "value": "Test code",
                  "heading": "test-code"
                },
                {
                  "depth": 2,
                  "value": "More",
                  "heading": "more"
                }
              ],
              "title": "Ant Design Pro"
            },
            "title": "Ant Design Pro"
          },
          {
            "path": "/~docs/components",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'components__index.md' */'/Users/yuzongyang/kuaishou/project/fantasy/fantasy-admin/src/components/index.md'), loading: LoadingComponent}),
            "exact": true,
            "meta": {
              "filePath": "src/components/index.md",
              "updatedTime": 1644215341000,
              "title": "业务组件",
              "sidemenu": false,
              "slugs": [
                {
                  "depth": 1,
                  "value": "业务组件",
                  "heading": "业务组件"
                },
                {
                  "depth": 2,
                  "value": "Footer 页脚组件",
                  "heading": "footer-页脚组件"
                },
                {
                  "depth": 2,
                  "value": "HeaderDropdown 头部下拉列表",
                  "heading": "headerdropdown-头部下拉列表"
                },
                {
                  "depth": 2,
                  "value": "HeaderSearch 头部搜索框",
                  "heading": "headersearch-头部搜索框"
                },
                {
                  "depth": 3,
                  "value": "API",
                  "heading": "api"
                },
                {
                  "depth": 2,
                  "value": "NoticeIcon 通知工具",
                  "heading": "noticeicon-通知工具"
                },
                {
                  "depth": 3,
                  "value": "NoticeIcon API",
                  "heading": "noticeicon-api"
                },
                {
                  "depth": 3,
                  "value": "NoticeIcon.Tab API",
                  "heading": "noticeicontab-api"
                },
                {
                  "depth": 3,
                  "value": "NoticeIconData",
                  "heading": "noticeicondata"
                },
                {
                  "depth": 2,
                  "value": "RightContent",
                  "heading": "rightcontent"
                }
              ],
              "hasPreviewer": true,
              "group": {
                "path": "/~docs/components",
                "title": "Components"
              }
            },
            "title": "业务组件 - ant-design-pro"
          }
        ],
        "title": "ant-design-pro",
        "component": (props) => props.children
      },
      {
        "path": "/user",
        "layout": false,
        "routes": [
          {
            "name": "login",
            "path": "/user/login",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__Login' */'/Users/yuzongyang/kuaishou/project/fantasy/fantasy-admin/src/pages/user/Login'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "path": "/dashboard",
        "name": "视图概览",
        "icon": "DashboardTwoTone",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__dashboard' */'/Users/yuzongyang/kuaishou/project/fantasy/fantasy-admin/src/pages/dashboard'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/assets",
        "name": "资产管理",
        "icon": "AppstoreTwoTone",
        "routes": [
          {
            "name": "创建文章",
            "path": "/assets/article/create",
            "icon": "BookTwoTone",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__article__create' */'/Users/yuzongyang/kuaishou/project/fantasy/fantasy-admin/src/pages/article/create'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "文章管理",
            "path": "/assets/articles",
            "icon": "BookTwoTone",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__article__list' */'/Users/yuzongyang/kuaishou/project/fantasy/fantasy-admin/src/pages/article/list'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "分类管理",
            "path": "/assets/categories",
            "icon": "TagTwoTone",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__article__category' */'/Users/yuzongyang/kuaishou/project/fantasy/fantasy-admin/src/pages/article/category'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "标签管理",
            "path": "/assets/tags",
            "icon": "TagsTwoTone",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__article__tag' */'/Users/yuzongyang/kuaishou/project/fantasy/fantasy-admin/src/pages/article/tag'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "path": "/users",
        "name": "用户管理",
        "icon": "ContactsTwoTone",
        "routes": [
          {
            "name": "消息中心",
            "path": "/users/messages",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__notice__' */'/Users/yuzongyang/kuaishou/project/fantasy/fantasy-admin/src/pages/user/notice/'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "个人设置",
            "path": "/users/settings",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__settings' */'/Users/yuzongyang/kuaishou/project/fantasy/fantasy-admin/src/pages/user/settings'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "path": "/audit",
        "name": "审计管理",
        "icon": "SecurityScanTwoTone",
        "routes": [
          {
            "name": "用户列表",
            "path": "/audit/users",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__audit__userList' */'/Users/yuzongyang/kuaishou/project/fantasy/fantasy-admin/src/pages/audit/userList'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "登录日志",
            "path": "/audit/login",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__audit__userLogin' */'/Users/yuzongyang/kuaishou/project/fantasy/fantasy-admin/src/pages/audit/userLogin'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "操作日志",
            "path": "/audit/operate",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__audit__operation' */'/Users/yuzongyang/kuaishou/project/fantasy/fantasy-admin/src/pages/audit/operation'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "访问日志",
            "path": "/audit/audit/access",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__audit__access' */'/Users/yuzongyang/kuaishou/project/fantasy/fantasy-admin/src/pages/audit/access'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "黑名单",
            "path": "/audit/audit/blacklist",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__audit__blacklist' */'/Users/yuzongyang/kuaishou/project/fantasy/fantasy-admin/src/pages/audit/blacklist'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "path": "/index.html",
        "redirect": "/dashboard",
        "exact": true
      },
      {
        "path": "/",
        "redirect": "/dashboard",
        "exact": true
      },
      {
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/yuzongyang/kuaishou/project/fantasy/fantasy-admin/src/pages/404'), loading: LoadingComponent}),
        "exact": true
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
