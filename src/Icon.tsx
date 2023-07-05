import React from "react";

import 'remixicon/fonts/remixicon.css'

type IconProps = {
  size?: number | undefined,
  color?: string | undefined,
  icon: string
}
const Icon = ({size = 20, color='black', icon}: IconProps) => {

  return (
      <div style={{ fontSize: `${size}px`, color }}>
        <i className={`ri-${icon}`}></i>
      </div>
  );
};
export default Icon;