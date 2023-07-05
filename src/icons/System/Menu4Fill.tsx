import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const Menu4Fill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'menu-4-fill'} size={size} color={color} />
    );
};
export default Menu4Fill;