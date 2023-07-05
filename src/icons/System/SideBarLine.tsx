import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const SideBarLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'side-bar-line'} size={size} color={color} />
    );
};
export default SideBarLine;