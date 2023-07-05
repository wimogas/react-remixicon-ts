import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const ShieldStarFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'shield-star-fill'} size={size} color={color} />
    );
};
export default ShieldStarFill;