import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Lab4 from "./Lab4";
import { Provider } from "react-redux";
import store from "./store";
export default function Labs() {
  return (
    <Provider store={store}>
      <div id="wd-labs">
        <h2> WEB DEVELOPMENT</h2>
        <h3> labs </h3>
        <h2>Shrivarshini Narayanan</h2>
        <h4>Section - 03</h4>
        <TOC />
        <Routes>
          <Route path="/" element={<Navigate to="Lab1" />} />
          <Route path="Lab1" element={<Lab1 />} />
          <Route path="Lab2" element={<Lab2 />} />
          <Route path="Lab3/*" element={<Lab3 />} />
          <Route path="Lab4/*" element={<Lab4 />} />
        </Routes>
      </div>
    </Provider>
  );
}
