import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const SkullFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'skull-fill'} size={size} color={color} />
    );
};
export default SkullFill;