import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const MenuFoldFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'menu-fold-fill'} size={size} color={color} />
    );
};
export default MenuFoldFill;