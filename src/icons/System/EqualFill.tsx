import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const EqualFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'equal-fill'} size={size} color={color} />
    );
};
export default EqualFill;