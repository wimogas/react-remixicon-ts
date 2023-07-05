import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const ProhibitedFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'prohibited-fill'} size={size} color={color} />
    );
};
export default ProhibitedFill;