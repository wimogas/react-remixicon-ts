import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const ArrowDropDownFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'arrow-drop-down-fill'} size={size} color={color} />
    );
};
export default ArrowDropDownFill;