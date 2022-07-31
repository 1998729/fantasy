// @ts-nocheck
import React, { useState, useEffect } from "react";
import { ApplyPluginsType, useModel , useIntl, traverseModifyRoutes, useAccess } from "umi";
import { plugin } from "../core/umiExports";
import LayoutComponent from './layout/layout/index.tsx';

export default props => {
  const [runtimeConfig, setRuntimeConfig] = useState(null);

  const initialInfo = (useModel && useModel("@@initialState")) || {
    initialState: undefined,
    loading: false,
    setInitialState: null
  }; // plugin-initial-state 未开启

  const access = useAccess?.();

  useEffect(() => {
    const useRuntimeConfig =
      plugin.applyPlugins({
        key: "layout",
        type: ApplyPluginsType.modify,
        initialValue: {
          ...initialInfo,
          traverseModifyRoutes: (menuData) => {return traverseModifyRoutes?.(menuData, access);},
        },
      }) || {};
    if (useRuntimeConfig instanceof Promise) {
      useRuntimeConfig.then((config) => {
        setRuntimeConfig(config);
      });
      return;
    }
    setRuntimeConfig(useRuntimeConfig);
  }, [initialInfo?.initialState, access]);

  const userConfig = {
    ...{'name':'ant-design-pro','theme':'PRO','locale':true,'showBreadcrumb':true,'siderWidth':208,'navTheme':'light','primaryColor':'#ff8000','layout':'side','logo':'/admin/logo.png','contentWidth':'Fluid','fixedHeader':true,'fixSiderbar':true,'title':'FANTASY','pwa':false,'iconfontUrl':'//at.alicdn.com/t/font_2451557_1sxc518pk8x.js','menu':{'locale':false},'headerHeight':48,'splitMenus':false},
    ...runtimeConfig || {}
  };

  const { formatMessage } = useIntl();

  if(!runtimeConfig){
    return null
  }

  return React.createElement(LayoutComponent, {
    userConfig,
    formatMessage,
    ...props
  });
};
