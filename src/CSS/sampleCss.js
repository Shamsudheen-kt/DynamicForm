import React from "react";

import { styles } from "./style.js";

export default function SampleCss() {
  const useStyle = styles();
  return (
    <div>
      <div style={useStyle.container}>
        <div style={useStyle.item}>Item 1</div>
        <div style={useStyle.item}>Item 2</div>
        <div style={useStyle.item}>Item 3</div>
        <div style={useStyle.item}>Item 4</div>
        <div style={useStyle.item}>Item 1</div>
        <div style={useStyle.item}>
          Item 2sdgfsdfdfasfasd sdfafasfasfasfdfsdfsdfsdfgsdgsdgsdg
        </div>
        <div style={useStyle.item}>Item 3</div>
        <div style={useStyle.item}>Item 4</div>
        {/* <div style={useStyle.item}>Item 1</div>
        <div style={useStyle.item}>Item 2</div>
        <div style={useStyle.item}>Item 3</div>
        <div style={useStyle.item}>Item 4</div> */}
      </div>
    </div>
  );
}
