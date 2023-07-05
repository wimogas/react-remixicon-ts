import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const Menu5Line = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'menu-5-line'} size={size} color={color} />
    );
};
export default Menu5Line;