import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import UseEffect from "./BasicHooks/UseEffect";
import UseContext from "./BasicHooks/useContext/UseContext";
import UseRef from "./AdditionalHooks/UseRef";
import UseReducer from "./AdditionalHooks/UseReducer";
import UseMemo from "./AdditionalHooks/UseMemo";
import CallBack from "./AdditionalHooks/CallBack";
import UseLayoutEffect from "./AdditionalHooks/UseLayoutEffect";
import UseImperativeHandle from "./AdditionalHooks/useImperativeHandle/UseImperativeHandle";

import Practise from "./UnMount_useeffect/Practise";
import CustomHooks from "./CustomHooks/CutomHooks";
import UseState from "./BasicHooks/UseState";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="useeffect" element={<UseEffect />} />
      <Route path="usestate" element={<UseState />} />
      <Route path="usecontext" element={<UseContext />} />

      <Route path="useref" element={<UseRef />} />
      <Route path="usereducer" element={<UseReducer />} />
      <Route path="usememo" element={<UseMemo />} />
      <Route path="callback" element={<CallBack />} />
      <Route path="uselayouteffect" element={<UseLayoutEffect />} />
      <Route path="useimperativehandle" element={<UseImperativeHandle />} />
      <Route path="practise" element={<Practise />} />
      <Route path="customhooks" element={<CustomHooks />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
