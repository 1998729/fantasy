// @ts-nocheck

import { useState } from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const App = () => {
  const [value, setValue] = useState("undefined" || "openapi");
  return (
    <div
      style={{
        padding: 24,
      }}
    >
      <select
        style={{
          position: "fixed",
          right: "16px",
          top: "8px",
        }}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="openapi">openapi</option>
<option value="swagger">swagger</option>
      </select>
      <SwaggerUI url={`/umi-plugins_${value}.json`} />
    </div>
  );
};
export default App;
