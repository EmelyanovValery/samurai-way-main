import * as React from "react";
import {ReduxStoreType, store} from "../redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import App from "../App";

export const StoreContext=React.createContext({} as ReduxStoreType)

export type ProvideType={
    store:ReduxStoreType,
    children: React.ReactNode
}

export const Provider = (props:ProvideType) => {
  return <StoreContext.Provider value={props.store}>
      {props.children}
  </StoreContext.Provider>
}
