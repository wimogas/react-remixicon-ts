import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const ArrowDropUpFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'arrow-drop-up-fill'} size={size} color={color} />
    );
};
export default ArrowDropUpFill;