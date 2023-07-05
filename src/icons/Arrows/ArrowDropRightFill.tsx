import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const ArrowDropRightFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'arrow-drop-right-fill'} size={size} color={color} />
    );
};
export default ArrowDropRightFill;