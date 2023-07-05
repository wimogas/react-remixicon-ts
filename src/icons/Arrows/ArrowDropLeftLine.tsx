import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const ArrowDropLeftLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'arrow-drop-left-line'} size={size} color={color} />
    );
};
export default ArrowDropLeftLine;