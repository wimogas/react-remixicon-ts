import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const MenuAddFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'menu-add-fill'} size={size} color={color} />
    );
};
export default MenuAddFill;