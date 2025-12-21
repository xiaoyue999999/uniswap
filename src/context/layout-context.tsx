'use client';

import { createContext, useContext, useReducer } from "react";

interface ValueContextType {
  state: any;
  dispatch: (params: { type: string; payload: {} }) => void;
}

const ValueContext = createContext<ValueContextType>({
  state: {},
  dispatch: (params: { type: string; payload: {} }) => {},
});

export const PackageProvider = ({ children, value, dispatch }: any) => {
  return (
    <ValueContext.Provider value={{ state: value, dispatch }}>
      {children}
    </ValueContext.Provider>
  );
};

export const useValues = () => {
  const context = useContext(ValueContext);
  if (!context) {
    throw new Error("useValues 必须在 ValueProvider 内部使用");
  }
  return context.state;
};

export const useDisplay = () => {
  const context = useContext(ValueContext);
  if (!context) {
    throw new Error("useDispatch 必须在 ValueProvider 内部使用");
  }
  return context.dispatch;
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    default:
      return { ...state, ...action.payload };
  }
};

// 布局上下文 全局的状态依赖
export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, {});

  return (
    <PackageProvider value={state} dispatch={dispatch}>
      {children}
    </PackageProvider>
  );
};
