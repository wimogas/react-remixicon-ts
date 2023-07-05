import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const SpamFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'spam-fill'} size={size} color={color} />
    );
};
export default SpamFill;